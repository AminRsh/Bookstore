
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { FaShieldHeart } from "react-icons/fa6";
import { FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { currentUser } from '@clerk/nextjs/server';

export default async function Auth() {
    const user  = await currentUser();

    return <>
        {
            <div className="flex space-x-4 text-[12px]">
                <div className="">
                    <SignedIn>
                        <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 justify-center items-center space-x-2">
                            <div className="flex space-x-2 items-center text-gray-700 hover:text-gray-900">
                                <UserButton afterSignOutUrl="/" />
                                <span className="text-sm font-semibold tracking-[0.08rem] space-x-1">
                                    <span> {user?.firstName}</span>
                                    <span>{user?.lastName}</span>
                                </span>
                            </div>
                            <span className="hidden sm:block text-gray-500 self-center">|</span>
                            <Link
                                href="/order"
                                className="flex space-x-2 items-center text-gray-700 hover:text-gray-900"
                            >
                                <FaShoppingCart color="#15A2F6 " className="h-5 w-5" />
                                <span className="text-sm font-semibold tracking-[0.08rem]">CART: (0$)</span>
                            </Link>
                            <span className="hidden sm:block text-gray-500">|</span>
                            <Link
                                href="/favorite"
                                className="flex space-x-2 items-center text-gray-700 hover:text-gray-900"
                            >
                                <FaShieldHeart color="#F63D15" className="h-5 w-5 " />
                                <span className="text-sm font-semibold tracking-[0.08rem]"> WISHLIST</span>
                            </Link>
                        </div>

                    </SignedIn>
                    <SignedOut>
                        <div className="flex justify-center items-center space-x-2">
                            <Link
                                href="/sign-in"
                                className="flex space-x-2 items-center text-gray-700 hover:text-gray-900"
                            >
                                <FaSignInAlt className="h-5 w-5" />
                                <span className="font-bold tracking-[0.08rem]">Sign In</span>
                            </Link>
                            <span className="text-gray-500 self-center">|</span>
                            <Link
                                href="/sign-up"
                                className="flex space-x-2 items-center text-gray-700 hover:text-gray-900"
                            >
                                <SiGnuprivacyguard className="h-5 w-5" />
                                <span className="font-bold tracking-[0.08rem]">Sign Up</span>
                            </Link>
                        </div>
                    </SignedOut>
                </div>
            </div>
        }
    </>
}
