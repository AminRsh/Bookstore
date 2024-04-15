"use server";

import prisma from "@/lib/prisma";
import { toSlug } from "@/lib/utils";
import { createBookSchema } from "@/lib/validation";
import { put } from "@vercel/blob";
import { nanoid } from "nanoid";
import { redirect } from "next/navigation";
import path from "path";

export async function createBookPosting(formData: FormData) {
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

    let bookCoverImg : string | undefined = undefined;

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
            rating: rating,
            bookCoverImg,
            description: description?.trim(),
            approved: true, 
        },
    });

    redirect("/book-submitted");
}
