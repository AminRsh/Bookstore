import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import PercentageToStars from "@/components/PercentageToStars"
import Image from "next/image"

interface CarouselReviewsProps {
    reviews: {
        id: number;
        bookId: number;
        userId: number;
        review: string;
        createdAt: string; 
        imgSrc: string;
    }[];
} 

export default function CarouselReviews( {reviews} : CarouselReviewsProps) {
    return (
        <Carousel className=" ">
            <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <div
                            className="swiper-slide group bg-white border border-solid h-auto border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600">
                            <div
                                className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                                <PercentageToStars
                                    rating={parseInt("25")}
                                />
                            </div>
                            <p
                                className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
                                {reviews[index]?.review}
                            </p>
                            <div className="flex items-center gap-5">
                                <Image src={reviews[index]?.imgSrc} alt="avatar" width={80} height={80} />
                                <div className="grid gap-1">
                                    <h5
                                        className="text-gray-900 font-medium transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                                        {reviews[index]?.createdAt}</h5>
                                    <span className="text-sm leading-6 text-gray-500">{reviews[index]?.userId}</span>
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
}