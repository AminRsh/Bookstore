"use server"

import prisma from "@/lib/prisma";
import { createUserSchema } from "@/lib/validation";
import { put } from "@vercel/blob";
import { redirect } from "next/navigation";
import path from "path";
import { handleError } from "../utils";
import { string } from "zod";

interface CreateUserParams {
    clerkId: string
    firstName: string
    lastName: string
    email: string
    username: string
    userPhoto: string
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
            userPhoto
        } = createUserSchema.parse(user)

        let userPhotoUrl: string = ""

        if (userPhoto) {
            const blob = await put(
                `user_photos/${clerkId}${path.extname(userPhoto.name)}`,
                userPhoto,
                {
                    access: "public",
                    addRandomSuffix: false
                }
            )
            userPhotoUrl = blob.url
        }

        const newUser = await prisma.user.create({
            data: {
                clerkId,
                firstName,
                lastName,
                username,
                email,
                userPhoto: userPhotoUrl
            }
            
        })

        return newUser
    } catch (error) {
        console.error("Error creating user:", error);
        handleError
    }

}
