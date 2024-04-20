"use server"

import prisma from "@/lib/prisma";
import { createUserSchema } from "@/lib/validation";
import { handleError } from "../utils";

interface CreateUserParams {
    clerkId: string
    firstName: string
    lastName: string
    email: string
    username: string
}

export async function createUser(user: CreateUserParams) {
    console.log("Received user data:", user);
    try {
        const {
            clerkId,
            firstName,
            lastName,
            username,
            email,
        } = createUserSchema.parse(user)



        const newUser = await prisma.user.create({
            data: {
                clerkId,
                firstName,
                lastName,
                username,
                email,
            }
            
        })

        return newUser
    } catch (error) {
        console.error("Error creating user:", error);
        handleError
    }

}
