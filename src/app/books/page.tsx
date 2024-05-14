import Book from '@/assets/main-book.png';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import BookImg from '@/assets/Unsplash.svg';
import { Input } from '@/components/ui/input';
import { IoIosSend } from "react-icons/io";
import prisma from '@/lib/prisma';
import BookFilterSlidebar from '@/components/BookFilterSlidebar';
import { BookFilterValues } from '@/lib/validation';
import { Metadata } from 'next';
import H1 from '@/components/ui/h1';
import BookResults from '@/components/BookResults';


interface PageProps {
    searchParams: {
        q?: string,
        category?: string,
        author?: string,
        publisher?: string,
        page?: string
    }
}

function getTitle({ q, category, author }: BookFilterValues) {
    const title = q
        ? `${q} Book`
        : category
            ? `${category} Book`
            : author
                ? `Written By ${author}`
                : "All Books"

    return title
}

export function generateMetadata({ searchParams: { q, category, author } }: PageProps): Metadata {
    return {
        title: `${getTitle({
            q,
            category,
            author,
        })}`
    }
}


const page = async ({ searchParams: { q, category, author, publisher, page } }: PageProps) => {

    const filterValues: BookFilterValues = {
        q,
        category,
        author,
        publisher
    }
    const books = await prisma.book.findMany({
        where: { approved: true },
        orderBy: { createdAt: "desc" }
    })
    return (
        <main>
            <div className="max-w-5xl my-10 m-auto space-y-10 px-3 ">
                <div className="space-y-5 text-center">
                    <H1>{getTitle(filterValues)}</H1>
                    <p className="text-muted-foreground">Find Your Favorite Book</p>
                </div>
                <section className="flex flex-col md:flex-row gap-4">
                    <BookFilterSlidebar defaultValues={filterValues} />
                    <BookResults filterValues={filterValues} page={page ? parseInt(page) : undefined} />
                </section>
            </div>


            <div style={{ backgroundImage: 'linear-gradient(to right, #FBEEEE, #F7FFFE)' }}
                className="px-4 md:px-8 lg:px-16 xl:px-20 py-8 md:py-12 lg:py-16 xl:py-20 mt-4 md:mt-8">
                <div className="flex flex-col md:flex-row md:space-x-20">
                    <div className="flex justify-center md:justify-start">
                        <Image src={Book} alt='Feature Book' />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="space-y-6">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#393280]">Featured book</h1>
                            <hr className="w-16 md:w-24 border-red-600" />
                            <span className="text-sm md:text-base text-[#888888]">By Timbur Hood</span>
                            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#393280]">Birds gonna be happy</h2>
                            <p className="text-sm md:text-base text-[#888888] max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#ED553B] font-semibold">$ 45.00</p>
                        </div>
                        <div className="mt-8 md:mt-12 md:flex md:justify-start">
                            <Button variant="outline" className="py-3 md:py-4 px-6 md:px-8 border-[#393280] flex justify-center items-center">
                                <span className="">VIEW MORE </span>
                                <MdOutlineArrowRightAlt size={20} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 mb-10 mx-14 rounded-md p-8 bg-[#FCEBEA]">
                <div className="flex flex-col space-y-8  lg:flex-row space-x-0 md:space-x-20 px-12 pt-2">
                    <div className="flex justify-center flex-col md:space-y-10 sm:space-y-12 space-y-6">
                        <h2 className="text-[#463C74] font-bold text-[25px] md:text-[30px] lg:text-[35px]">All books are 50% off now! Do not miss such a deal!</h2>
                        <p className="text-[#393280] text-[16px] md:text-[18px] lg:text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
                        <div className="flex flex-row space-x-4 md:space-x-8">
                            <div className="flex flex-col">
                                <span className="text-[#ED553B] font-bold text-[26px] md:text-[30px] lg:text-[34px]">781</span>
                                <span className="text-[16px] md:text-[18px] lg:text-[20px]">DAYS</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#ED553B] font-bold text-[26px] md:text-[30px] lg:text-[34px]">01</span>
                                <span className="text-[16px] md:text-[18px] lg:text-[20px]">HOUR</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#ED553B] font-bold text-[26px] md:text-[30px] lg:text-[34px]">27</span>
                                <span className="text-[16px] md:text-[18px] lg:text-[20px]">MIN</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#ED553B] font-bold text-[26px] md:text-[30px] lg:text-[34px]">55</span>
                                <span className="text-[16px] md:text-[18px] lg:text-[20px]">SEC</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex mx-auto justify-center items-center lg:justify-end lg:flex-grow">
                        <Image
                            src={BookImg}
                            alt='BookImg'
                            className="self-center h-[200px] mr-[25%] lg:self-end lg:min-h-[400px]"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-[#E0E0E0]">
                <div className="flex flex-col space-y-6 lg:flex-row justify-center items-center py-8 lg:space-x-48 lg:p-[150px]">
                    <div className="flex justify-center items-center">
                        <h1 className="text-[30px] font-semibold  lg:max-w-[250px]">Subscribe to our newsletter</h1>
                    </div>

                    <div className="flex flex-col items-center space-y-4 ">
                        <p className="text-[#7A7A7A] text-center lg:max-w-[400px]">
                            Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur. Elit adipiscing enim pharetra hac.
                        </p>
                        <div className="flex w-full max-w-sm items-center">
                            <Input type="email" placeholder="Enter your email addresss here" className="rounded-none border-b-[#7A7A7A] bg-[#E0E0E0] border-t-[#E0E0E0] border-x-[#E0E0E0] hover:bg-[#E0E0E0] focus-visible:ring-0" />
                            <Button type="submit" variant="ghost" className="space-x-2" size="sm">
                                <span className="text-[#ED553B] text-[14px]">SEND</span>
                                <IoIosSend color="#ED553B" size="20" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page