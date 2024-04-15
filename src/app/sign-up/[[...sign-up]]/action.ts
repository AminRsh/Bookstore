import prisma from "@/lib/prisma";
import Swal from 'sweetalert2'

interface ClerkUser {
    id: string;
    email: string;
    password: string;
}

async function handleUserSignUp(clerkUser: ClerkUser) {
    const { id, email, password } = clerkUser;

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
                password,
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
