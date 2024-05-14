
import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import BookPage from "@/components/BookPage"
import FeedbackForm from "@/components/FeedbackForm"
import CarouselReviews from "@/components/CarouselReviews"
import { getReview } from "@/lib/actions/review.action"
import { clerkClient } from "@clerk/nextjs";

interface PageProps {
    params: { slug: string }
}



const getBook = async (slug: string) => {
    const book = await prisma.book.findUnique({
        where: { slug }
    })

    if (!book){ 
        alert("Book not found")
        return notFound();
    }

    return book
}

export async function generateStaticParams() {
    const books = await prisma.book.findMany({
        where: { approved: true },
        select: { slug: true }
    })

    return books.map(({ slug }) => slug)
}

// export async function generateMetadata({ params: { slug } }: PageProps): Promise<Metadata> {
//     const book = await getBook(slug)

//     return {
//         title: book.title
//     }
// }

const Page = async ({ params: { slug } }: PageProps) => {
    const book = await getBook(slug)
    const bookId = book.id

    if (!book) {
        console.log("Book has no application link or email");
        notFound()
    }

    const reviews = await getReview(bookId) || []
    type Review = {
        user: {
            clerkId: string;
        };
    };
    const fetchUserImages = async (reviews: Review[]) => {
        const userImages = [];
        for (const review of reviews) {
            const user = await clerkClient.users.getUser(review.user.clerkId);
            userImages.push(user.imageUrl);
        }
        return userImages;
    };

    const userImages = await fetchUserImages(reviews);

    return (
        <>
            <div className="flex space-x-16 mx-[150px] my-[100px] xl:mx-[50px]">
                <div className="relative group xl:col-span-3">
                    <BookPage book={book} />
                </div>

                <div className="grow rounded-xl flex flex-col items-center justify-center">
                    <FeedbackForm
                        bookId={bookId}
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center mb-10 mx-[200px] px-20">
                <CarouselReviews
                    reviews={reviews}
                    userImages={userImages}
                />
            </div>
        </>
    )
}

export default Page 
