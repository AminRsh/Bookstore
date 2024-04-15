import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import bookData from '../lib/book-release'
import Image from "next/image"

export function CarouselRelase() {
    return (
        <Carousel className="w-full max-w-[85%]">
            <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <div className="p-1 sm:p-0 flex flex-col items-center justify-center">
                            <Card className="w-[280px] h-[350px] rounded-none shadow-md">
                                <CardContent className="flex aspect-square items-center justify-center p-10">
                                    <Image
                                        src={bookData[index].src}
                                        alt={bookData[index].title}
                                        width={220}
                                        height={330}
                                    />
                                </CardContent>
                            </Card>
                            <div className="flex flex-col space-y-1 py-4">
                                <span className="text-center font-semibold">{bookData[index].title}</span>
                                <span className="text-center text-[#888888] text-xs ">{bookData[index].author}</span>
                                <span className="text-center text-[#ED553B] font-bold">{bookData[index].price}</span>
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
