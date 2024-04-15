import { cache } from "react"
import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import BookPage from "@/components/BookPage"
import { Button } from "@/components/ui/button"
import FeedbackForm from "@/components/FeedbackForm"
import CarouselReviews from "@/components/CarouselReviews"


interface PageProps {
    params: { slug: string }
}

const reviews = [
    {
        "id": 1,
        "bookId": 123,
        "userId": 456,
        "review": "This book is amazing! Highly recommended.",
        "createdAt": "2024-04-08T12:00:00Z",
        "imgSrc": "/assets/profile.png"
    },
    {
        "id": 2,
        "bookId": 456,
        "userId": 789,
        "review": "I couldn't get into this book. Not my cup of tea.",
        "createdAt": "2024-04-07T10:30:00Z",
        "imgSrc": "/assets/profile.png"
    },
    {
        "id": 3,
        "bookId": 789,
        "userId": 123,
        "review": "A classic! I've read it multiple times.",
        "createdAt": "2024-04-06T15:45:00Z",
        "imgSrc": "/assets/profile.png"
    },
    {
        "id": 4,
        "bookId": 790,
        "userId": 124,
        "review": "A classic! I've read it multiple times.",
        "createdAt": "2024-04-06T15:45:00Z",
        "imgSrc": "/assets/profile.png"
    },
    {
        "id": 5,
        "bookId": 791,
        "userId": 125,
        "review": "A classic! I've read it multiple times.",
        "createdAt": "2024-04-06T15:45:00Z",
        "imgSrc": "/assets/profile.png"
    },
]


const getBook = cache(async (slug: string) => {
    const book = await prisma.book.findUnique({
        where: { slug }
    })

    if (!book) notFound();
    return book
})

export async function generateStaticParams() {
    const books = await prisma.book.findMany({
        where: { approved: true },
        select: { slug: true }
    })

    return books.map(({ slug }) => slug)
}

export async function generateMetadata({ params: { slug } }: PageProps): Promise<Metadata> {
    const book = await getBook(slug)

    return {
        title: book.title
    }
}


const Page = async ({ params: { slug } }: PageProps) => {
    const book = await getBook(slug)

    if (!book) {
        console.log("Book has no application link or email");
        notFound()
    }

    return <main className="flex justify-center items-center space-x-32 mb-[80px] mx-auto">
        <BookPage book={book} />
        <div className="border rounded-xl bg-gray-200 w-[795px] h-[600px] flex flex-col justify-center items-center">
            <FeedbackForm />
        </div>

        <div className="flex flex-col justify-center mx-auto px-20">
                <CarouselReviews reviews={reviews} />
        </div>
    </main>

}

export default Page 