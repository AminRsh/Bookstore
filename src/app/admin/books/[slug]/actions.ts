"use server"

import prisma from '@/lib/prisma';
import { isAdmin } from "@/lib/utils"
import { currentUser } from "@clerk/nextjs"
import { del } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

type FormState = { error?: string} | undefined

export async function approveSubmission(prevState: FormState,  formData: FormData): Promise<FormState> {
    try {
        const bookId = parseInt(formData.get("bookId") as string)


        const user = await currentUser()

        if (!user || !isAdmin(user)) {
            throw new Error("Not authorized")
        }

        await prisma.book.update({
            where: {id: bookId},
            data: {approved: true}
        })

        revalidatePath("/")
    } catch (error) {
        let message = "Unexpected error"
        if (error instanceof Error) {
            message = error.message
        }
        return { error: message}
    }
}

export async function deleteJob(prevState: FormState, formData: FormData) {
    try {
        const bookId = parseInt(formData.get("bookId") as string)

        const user = await currentUser()
        
        if (!user || !isAdmin(user)) {
            throw new Error("Not authorized")
        }

        const book = await prisma.book.findUnique({
            where: {id: bookId}
        })

        if (book?.bookCoverImg) {
            await del(book.bookCoverImg)
        }

        await prisma.book.delete({
            where: {id: bookId}
        })

        revalidatePath("/books")
        redirect("/books")

    } catch (error) {
        let message = "Unexpected error"
        if (error instanceof Error) {
            message = error.message
        }
        return { error: message}
    }

    redirect("/admin")
}