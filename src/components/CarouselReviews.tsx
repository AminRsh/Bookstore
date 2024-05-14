
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import PercentageToStars from "@/components/PercentageToStars"
import Image from "next/image"


interface User {
    clerkId: string;
    firstName: string | null;
    lastName: string | null;
}

interface Review {
    id: number;
    bookId: number;
    userId: number;
    review: string;
    rating: number;
    createdAt: Date;
    user: User;
}

interface CarouselReviewsProps {
    reviews: Review[];
    userImages: string[];
}

export default function CarouselReviews({ reviews, userImages }: CarouselReviewsProps) {

    const revirewNumbers = reviews.length;


    if (revirewNumbers > 0) {
        return (
            <Carousel className=" ">
                <CarouselContent className="-ml-1">
                    {Array.from({ length: revirewNumbers }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2  lg:basis-1/3 xl:basis-1/4">
                            <div
                                className="swiper-slide group bg-white border border-solid h-auto border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600">
                                <div
                                    className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                                    <PercentageToStars
                                        rating={reviews[index]?.rating}
                                    />
                                </div>
                                <p
                                    className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
                                    {reviews[index]?.review}
                                </p>
                                <div className="flex items-center gap-5">
                                    <Image src={userImages[index]} alt="avatar" width={50} height={50} className="rounded-full" />
                                    <div className="grid gap-1">
                                        <h5
                                            className="text-gray-900 font-medium transition-all duration-500 text-xs group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">{reviews[index]?.user.firstName} {reviews[index]?.user.lastName}
                                        </h5>
                                        <span className="text-xs leading-6 text-gray-500"> {reviews[index]?.createdAt.toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        )
    } else {
        return <div className="text-center font-semibold text-[20px] mb-[15px]">No reviews available.</div>;
    }

}
