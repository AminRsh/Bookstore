"use server";

import prisma from "@/lib/prisma";
import { toSlug } from "@/lib/utils";
import { createBookSchema } from "@/lib/validation";
import { put } from "@vercel/blob";
import { nanoid } from "nanoid";
import path from "path";
import { currentUser } from "@clerk/nextjs/server";
import { getUserById } from "./user.actions";


export async function createBookPosting(formData: FormData) {

    const user = await currentUser()
    const userId = user?.id

    let createdBy: number | undefined;
    if (userId) {
        createdBy = await getUserById(userId);
    }

    const values = Object.fromEntries(formData.entries());

    const {
        title,
        author,
        category,
        description,
        coverImg,
        price,
        publisher,
        isbn,
        language,
        pages,
        rating,
    } = createBookSchema.parse(values);

    const slug = `${toSlug(title)}-${nanoid(10)}`;

    let bookCoverImg: string | undefined = undefined;

    if (coverImg) {
        const blob = await put(
            `cover_images/${slug}${path.extname(coverImg.name)}`,
            coverImg,
            {
                access: "public",
                addRandomSuffix: false,
            },
        );

        bookCoverImg = blob.url;
    }

    if (createdBy) {
        await prisma.book.create({
            data: {
                slug,
                title: title.trim(),
                author: author.trim(),
                category: category?.trim(),
                price: parseInt(price),
                publisher: publisher?.trim(),
                isbn: isbn?.trim(),
                language: language?.trim(),
                pages: parseInt(pages),
                rating: parseInt(rating),
                bookCoverImg,
                description: description?.trim(),
                approved: false,
                createdBy: {
                    connect: {
                        id: createdBy,
                    },
                },
            },
        });

    } else {
        console.log("created By Notfound");

    }
}

