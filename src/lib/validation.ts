import { z } from "zod"

const requiredString = z.string().min(1, "Required")
const numericRequiredString = requiredString.regex(/^\d+$/, "Must be a number");

const ImgSchema = z.custom<File | undefined>()
    .refine(
        (file) => !file || (file instanceof File && file.type.startsWith("image/")),
        "Must be an image file")
    .refine(file => {
        return !file || file.size < 1024 * 1024 * 2
    }, "File must be less than 2MB")

export const createBookSchema = z.object({
    title: requiredString.max(300),
    author: requiredString.max(150),
    category: requiredString.max(100).optional(),
    description: z.string().max(5000).optional(),
    coverImg: ImgSchema,
    price: numericRequiredString.max(9, "Number can't be longer than 9 digits"),
    publisher: requiredString.max(100).optional(),
    isbn: requiredString.max(100).optional(),
    language: requiredString.max(100).optional(),
    pages: numericRequiredString.max(9, "Number can't be longer than 9 digits"),
    rating: z.number().max(100, "Rating can't be higher than 100"),
})

export type CreateBookValues = z.infer<typeof createBookSchema>

export const bookFilterSchema = z.object({
    q: z.string().optional(),
    category: z.string().optional(),
    author: z.string().optional(),
    publisher: z.string().optional(),
})

export type BookFilterValues = z.infer<typeof bookFilterSchema>

export const createUserSchema = z.object({
    clerkId: requiredString.max(100),
    email: requiredString.max(100),
    username: requiredString.max(100),
    firstName: requiredString.max(100), 
    lastName: requiredString.max(100),
    userPhoto: ImgSchema
})