"use server"

import prisma from "@/lib/prisma";
import { createUserSchema } from "@/lib/validation";
import { handleError } from "../utils";
import NotFound from "@/app/not-found";


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


export async function getUserById(clerkId: string) {
    try {
        const user = await prisma.user.findUnique({
            where: { clerkId }
        })

        const id = user?.id

        if (!user) {
            console.log("User Not Found");
            NotFound()
        }

        return id
        
    } catch (error) {
        handleError(error)
    }
}

