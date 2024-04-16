import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { createUser } from '@/lib/actions/user.actions'
import { clerkClient } from '@clerk/nextjs'

export async function POST(req: Request) {

    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

    if (!WEBHOOK_SECRET) {
        throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
    }

    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occured -- no svix headers', {
            status: 400
        })
    }

    const payload = await req.json()
    const body = JSON.stringify(payload);

    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: WebhookEvent

    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent
    } catch (err) {
        console.error('Error verifying webhook:', err);
        return new Response('Error occured', {
            status: 400
        })
    }

    const { id } = evt.data;
    const eventType = evt.type;

    

    if (eventType === "user.created") {
        
        const { id, email_addresses, first_name, last_name, username ,image_url} = evt.data
        const user = {
            clerkId: id,
            firstName: first_name,
            lastName: last_name,
            username: username!,
            email: email_addresses[0].email_address,
            userPhoto: image_url,
        }

        const newUser = await createUser(user);

        console.log("New user:", newUser);

        if (newUser) {
            await clerkClient.users.updateUserMetadata(id, {
                publicMetadata: {
                    userId: newUser.id
                }
            })
        } 
    }

    
    return new Response('', { status: 200 })
}