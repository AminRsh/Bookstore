/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import Blog1 from "@/assets/Blog1.png"
import Blog2 from "@/assets/Blog2.png"
import Blog3 from "@/assets/Blog3.png"
import Blog4 from "@/assets/Blog4.png"
import { Button } from "@/components/ui/button"
import Link from "next/link"




const page = () => {
    return (
        <div>
            <h1 className="font-semibold text-[#444444] text-center text-[32px] ">Read our many blogs</h1>
            <div className="w-[80%] my-[40px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="relative group ">
                        <Image src={Blog1} alt="Blog1" className="w-full rounded" />
                        <div className="absolute bottom-0 left-0 right-0 h-[40%] flex items-center justify-start">
                            <div className="bg-gradient-to-t from-[#000000f2] via-[#67676752] to-[#9d9c9c03]   w-full h-full absolute"></div>
                            <div className="flex flex-col ml-[3%] space-y-4 z-10">
                                <span className="text-white text-lg w-full">Learn about this week's top author</span>
                                <span className="text-white text-sm w-80">Jump start your book reading by quickly check through the popular book categories...</span>
                            </div>
                        </div>
                        <div className="invisible opacity-0 absolute group-hover:flex group-hover:top-[0%] group-hover:visible group-hover:opacity-100
                        justify-center items-center inset-0 top-[100%] transition-[top] duration-300 backdrop-blur-sm p-6 z-20">
                            <Button variant="outline" asChild className="bg-transparent text-white rounded-none border-2" size="lg">
                                <Link href="/more">Read More</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative group">
                        <Image src={Blog2} alt="Blog2" className="w-full" />
                        <div className="absolute bottom-0 left-0 right-0 h-[40%] flex items-center justify-start">
                            <div className="bg-gradient-to-t from-[#000000f2] via-[#67676752] to-[#9d9c9c03]   w-full h-full absolute"></div>
                            <div className="flex flex-col ml-[3%] space-y-4 z-10">
                                <span className="text-white text-lg w-full">Why we celebrate readers</span>
                                <span className="text-white text-sm w-80">Jump start your book reading by quickly check through the popular book categories...</span>
                            </div>
                        </div>
                        <div className="invisible opacity-0 absolute group-hover:flex group-hover:top-[0%] group-hover:visible group-hover:opacity-100
                        justify-center items-center inset-0 top-[100%] transition-[top] duration-300 backdrop-blur-sm p-6 z-20">
                            <Button variant="outline" asChild className="bg-transparent text-white rounded-none border-2" size="lg">
                                <Link href="/more">Read More</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative group">
                        <Image src={Blog3} alt="Blog3" className="w-full" />
                        <div className="absolute bottom-0 left-0 right-0 h-[40%] flex items-center justify-start">
                            <div className="bg-gradient-to-t from-[#000000f2] via-[#67676752] to-[#9d9c9c03]   w-full h-full absolute"></div>
                            <div className="flex flex-col ml-[3%] space-y-4 z-10">
                                <span className="text-white text-lg w-full">Toddlers can also read</span>
                                <span className="text-white text-sm w-80">Jump start your book reading by quickly check through the popular book categories...</span>
                            </div>
                        </div>
                        <div className="invisible opacity-0 absolute group-hover:flex group-hover:top-[0%] group-hover:visible group-hover:opacity-100
                        justify-center items-center inset-0 top-[100%] transition-[top] duration-300 backdrop-blur-md p-6 z-20">
                            <Button variant="outline" asChild className="bg-transparent text-black rounded-none border-2 border-black" size="lg">
                                <Link href="/more">Read More</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative group">
                        <Image src={Blog4} alt="Blog4" className="w-full" />
                        <div className="absolute bottom-0 left-0 right-0 h-[40%] flex items-center justify-start">
                            <div className="bg-gradient-to-t from-[#000000f2] via-[#67676752] to-[#9d9c9c03]   w-full h-full absolute"></div>
                            <div className="flex flex-col ml-[3%] space-y-4 z-10">
                                <span className="text-white text-lg w-full">Get started on your game</span>
                                <span className="text-white text-sm w-80">Jump start your book reading by quickly check through the popular book categories...</span>
                            </div>
                        </div>
                        <div className="invisible opacity-0 absolute group-hover:flex group-hover:top-[0%] group-hover:visible group-hover:opacity-100
                        j justify-center items-center inset-0 top-[100%] transition-[top] duration-300 backdrop-blur-md p-6 z-20">
                            <Button asChild variant="outline" className="bg-transparent text-black rounded-none border-2 border-black" size="lg">
                                <Link href="/more">Read More</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
