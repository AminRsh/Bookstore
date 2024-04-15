"use client"
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsTwitterX, BsFacebook } from "react-icons/bs";
import {
    FaHeart,
    FaInstagram,
    FaShoppingCart,
    FaUser,
    FaYoutube,
} from "react-icons/fa";
import LogoImage from "../assets/logo.png";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";

const Navbar = () => {
    const { isLoaded, user } = useUser();


    return (
        <nav className="">
            {
                isLoaded && (
                    <>
                        <section>
                            <div className="mx-auto bg-[#393280] py-2 sm:min-h-[55px] flex flex-col items-center justify-between px-16 sm:flex-row">
                                <div className="flex space-x-2 items-center sm:justify-center ">
                                    <Phone color="#fff" size={24} />
                                    <p className="text-white font-semibold">
                                        <span>+1</span> <span className="tracking-wide">647</span>{" "}
                                        <span className="tracking-wide">784</span>{" "}
                                        <span className="tracking-wide">8960</span>
                                    </p>
                                </div>
                                <div className="text-white hidden sm:flex space-x-8">
                                    <a href="/">
                                        <BsFacebook
                                            size="20"
                                            className="text-[#fff] transition-colors ease-in-out delay-150ms hover:text-yellow-500"
                                        />
                                    </a>
                                    <a href="/">
                                        <FaInstagram
                                            size="20"
                                            className="text-[#fff] transition-colors ease-in-out delay-150ms hover:text-yellow-500"
                                        />
                                    </a>
                                    <a href="/">
                                        <BsLinkedin
                                            size="18"
                                            className="text-[#fff] transition-colors ease-in-out delay-150ms hover:text-yellow-500"
                                        />
                                    </a>
                                    <a href="/">
                                        <BsTwitterX
                                            size="18"
                                            className="text-[#fff] transition-colors ease-in-out delay-150ms hover:text-yellow-500"
                                        />
                                    </a>
                                    <a href="/">
                                        <FaYoutube
                                            size="20"
                                            className="text-[#fff] transition-colors ease-in-out delay-150ms hover:text-yellow-500"
                                        />
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section className="max-w-[95%]  mx-auto px-8 py-2 flex flex-col space-y-4 md:flex-row justify-between items-center">
                            <a href="/" className="hidden md:block">
                                <Image
                                    src={LogoImage}
                                    width={70}
                                    height={70}
                                    alt="logoImg"
                                    priority
                                    style={{ width: "auto", height: "auto" }}
                                />
                            </a>

                            <div className="grow">
                                <SearchBar />
                            </div>

                            <div className="flex space-x-4 text-[12px]">
                                <div className="">
                                    <SignedIn>
                                        <div className="flex space-x-2 items-center text-gray-700 hover:text-gray-900">
                                            <UserButton afterSignOutUrl="/" />
                                            <span className="font-bold tracking-[0.08rem]">
                                                {user?.fullName}
                                            </span>
                                        </div>
                                    </SignedIn>
                                    <SignedOut>
                                        <Link
                                            href="/sign-in"
                                            className="flex space-x-2 items-center text-gray-700 hover:text-gray-900"
                                        >
                                            <FaUser className="h-5 w-5" />
                                            <span className="font-bold tracking-[0.08rem]">LOGIN</span>
                                        </Link>
                                    </SignedOut>
                                </div>
                                <span className="text-gray-500">|</span>
                                <Link
                                    href="/"
                                    className="flex space-x-2 items-center text-gray-700 hover:text-gray-900"
                                >
                                    <FaShoppingCart className="h-5 w-5" />
                                    <span className="font-bold tracking-[0.08rem]">CART: (0$)</span>
                                </Link>
                                <span className="text-gray-500">|</span>
                                <Link
                                    href="/"
                                    className="flex space-x-2 items-center text-gray-700 hover:text-gray-900"
                                >
                                    <FaHeart className="h-5 w-5 " />
                                    <span className="font-bold tracking-[0.08rem]"> WISHLIST</span>
                                </Link>
                            </div>
                        </section>

                        <div className="flex items-cente mt-4 max-w-[95%]  mx-auto px-8">
                            <div className="flex-1 border-t-[3px] border-gray-200"></div>
                        </div>

                        <section className="z-30">
                            <Menu />
                        </section>
                    </>
                )

            }

        </nav>
    );
};

export default Navbar;
