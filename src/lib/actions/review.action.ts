"use server"

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { getUserById } from "./user.actions";



export async function createReview(bookId: number, rating:number, review: string) {
    const clerkUser = await currentUser()
    const clerkId = clerkUser?.id

    let userId: number | undefined;
    if (clerkId) {
        userId = await getUserById(clerkId)
    }
    
    

    if (userId) {
        await prisma.bookReview.create({
            data: {
                book: {
                    connect: {
                        id: bookId
                    }
                },
                user: {
                    connect: {
                        id: userId
                    }
                },
                review: review.trim(),
                rating,
            }
        })
    } else {
        console.log("User Not Found");
        
    }
}

export async function getReview( bookId:number) {
    try {
        const reviews = await prisma.bookReview.findMany({
            where: {
                bookId: bookId
            },
            include: {
                user: {
                    select : {
                        clerkId: true,
                        firstName: true,
                        lastName: true,
                    }
                }
            }
        })
        
        return reviews 

    } catch (error) {
        console.log('Failed to fetch reviews');
    }
}