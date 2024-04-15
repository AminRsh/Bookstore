import Image from "next/image"
import MainRelease from "@/assets/main-release.png"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CarouselRelase } from "@/components/CarouselRelase"

const page = () => {
    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div
                    className="py-10 pl-12 pr-10"
                    style={{ backgroundImage: 'linear-gradient(to right, #FFE5E5, #ffffff 70%)' }}>
                    <div className="flex flex-col max-w-[620px] space-y-4">
                        <div className="flex items-center space-x-2 ">
                            <hr className="w-[18px] border-red-600" />
                            <span className="text-red-600 text-sm font-semibold">Categories</span>
                        </div>
                        <h1 className="text-[#38426C] text-[30px] font-semibold">Access, Read, Practice & Engage
                            with Digital Content (eBook)
                        </h1>
                        <p className="text-[#393280]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="flex w-full max-w-sm items-center mt-6">
                        <Input
                            type="email"
                            placeholder="Enter your email address"
                            className="rounded-r-none" />
                        <Button
                            variant="destructive"
                            type="submit"
                            className="rounded-l-none"
                        >Login</Button>
                    </div>
                </div>
                <div className="relative">
                    <Image
                        src={MainRelease}
                        alt="MainRelease"
                        layout="fill"
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center mt-20">
                <span className="text-[#7A7A7A] uppercase text-xs">Some quality items</span>
            </div>
            <div className="mt-4 mb-14">
                <h1 className="text-center text-3xl relative overflow-hidden text-[#393280]">
                    <span className="relative inline-block h-[45px] before:content-[''] before:absolute 
                        before:top-[50%] before:border-b-2 before:w-[591px] before:my-0 before:mx-[20px] before:right-[100%] before:border-[#E0E0E0]
                        after:content-[''] after:absolute after:top-[50%] after:border-b-2 after:w-[591px] after:my-0 after:mx-[20px] after:left-[100%] after:border-[#E0E0E0]
                        ">New Release Books</span>
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center">
                <CarouselRelase />
            </div>
        </div>
    )
}

export default page