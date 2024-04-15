import prisma from "@/lib/prisma";
import Swal from 'sweetalert2'

interface ClerkUser {
    id: string;
    email: string;
    username: string;
    firstName: string,
    lastName: string,
    userPhoto: string,
}

async function handleUserSignUp(clerkUser: ClerkUser) {
    const { id, email, username, firstName, lastName, userPhoto } = clerkUser;

    let user = await prisma.user.findUnique({
        where: {
            clerkId: id
        }
    })

    if (!user) {
        user = await prisma.user.create({
            data: {
                clerkId: id,
                email,
                username,
                firstName,
                lastName,
                userPhoto
            }
        })
    }

    Swal.fire({
        title: "Custom animation with Animate.css",
        showClass: {
            popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
        `
        },
        hideClass: {
            popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
        `
        }
    });
}
