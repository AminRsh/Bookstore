import H1 from "@/components/ui/h1"
import {
    Building2,
    CircleDollarSign,
    BookOpenCheck,
    Languages,
    Code,
    Layers,
    MessageCircleHeart
} from "lucide-react"
import Image from "next/image"
import Markdown from "@/components/Markdown"
import { Button } from "@/components/ui/button"
import CardReview from "@/components/CardReview"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { VscStarFull, VscStarHalf, VscStarEmpty } from "react-icons/vsc";
import PercentageToStars from "@/components/PercentageToStars"
import FeedbackForm from "@/components/FeedbackForm"

const NotFound = () => {

    // const reviews = [
    //     {
    //         "id": 1,
    //         "bookId": 123,
    //         "userId": 456,
    //         "review": "This book is amazing! Highly recommended.",
    //         "createdAt": "2024-04-08T12:00:00Z",
    //         "imgSrc": "/assets/profile.png"
    //     },
    //     {
    //         "id": 2,
    //         "bookId": 456,
    //         "userId": 789,
    //         "review": "I couldn't get into this book. Not my cup of tea.",
    //         "createdAt": "2024-04-07T10:30:00Z",
    //         "imgSrc": "/assets/profile.png"
    //     },
    //     {
    //         "id": 3,
    //         "bookId": 789,
    //         "userId": 123,
    //         "review": "A classic! I've read it multiple times.",
    //         "createdAt": "2024-04-06T15:45:00Z",
    //         "imgSrc": "/assets/profile.png"
    //     },
    //     {
    //         "id": 4,
    //         "bookId": 790,
    //         "userId": 124,
    //         "review": "A classic! I've read it multiple times.",
    //         "createdAt": "2024-04-06T15:45:00Z",
    //         "imgSrc": "/assets/profile.png"
    //     },
    //     {
    //         "id": 5,
    //         "bookId": 791,
    //         "userId": 125,
    //         "review": "A classic! I've read it multiple times.",
    //         "createdAt": "2024-04-06T15:45:00Z",
    //         "imgSrc": "/assets/profile.png"
    //     },
    // ]


    return (
        <>
            <main className="m-auto my-10 max-w-5xl space-y-5 px-3 text-center ">
                <H1>Not Found</H1>
                <p className="">Sorry, the page you are looking for not exist.</p>
            </main>

            {/* <div className="flex justify-center items-center space-x-32 mb-[80px] mx-auto">
                <div className="my-10 flex flex-col items-center gap-5 px-3 h-[600px] rounded-xl bg-gray-200">
                    <div className="w-full grow space-y-5 p-8">
                        <div className="flex items-center gap-16">
                            <div className="w-[250px] h-[350px]">
                                <Image
                                    src="http://ecx.images-amazon.com/images/I/61YNkq4DE4L.jpg"
                                    alt="cover"
                                    width={250}
                                    height={400}
                                    className="rounded-xl object-cover min-h-[350px]"
                                    priority
                                />

                            </div>
                            <div className="">
                                <div className="my-8">
                                    <h1 className="text-xl font-bold">
                                        Harry Potter and the Philosophers Stone
                                    </h1>
                                    <p className="font-semibold">J.K. Rowling</p>
                                </div>
                                <div className="text-muted-foreground space-y-[5px]">
                                    <p className="flex items-center gap-1.5">
                                        <Building2 size={16} className="shrink-0" />
                                        Fantasy
                                    </p>
                                    <p className="flex items-center gap-1.5">
                                        <CircleDollarSign size={16} className="shrink-0" />
                                        20
                                    </p>
                                    <p className="flex items-center gap-1.5">
                                        <BookOpenCheck size={16} className="shrink-0" />
                                        Bloomsbury Publishing
                                    </p>
                                    <p className="flex items-center gap-1.5">
                                        <Code size={16} className="shrink-0" />
                                        9780747532743
                                    </p>
                                    <p className="flex items-center gap-1.5">
                                        <Languages size={16} className="shrink-0" />
                                        English
                                    </p>
                                    <p className="flex items-center gap-1.5">
                                        <Layers size={16} className="shrink-0" />
                                        223
                                    </p>
                                    <p className="flex items-center gap-1.5">
                                        <MessageCircleHeart size={16} className="shrink-0" />
                                        4.5
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[100px]">
                            <Markdown>The first book in the Harry Potter series.</Markdown>
                        </div>
                    </div>
                    <div className="mb-8">
                        <Button asChild>
                            <a href="/" className="w-80">
                                Order now
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="border rounded-xl bg-gray-200 w-[795px] h-[600px] flex flex-col justify-center items-center">
                    <FeedbackForm />
                </div>
            </div> */}


            {/* <div className="flex flex-col justify-center mx-auto px-20">
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
            </div> */}

        </>

    )
}

export default NotFound