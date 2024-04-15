import Image from "next/image"
import logo from "@/assets/footer-logo.png"
import footer1 from "@/assets/footer-one.png"
import footer2 from "@/assets/footer-two.png"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa";
import Link from "next/link"

const Footer = () => {
    return (
        <footer
            style={{ backgroundImage: 'linear-gradient(to right, #FFE5E5, #ffffff 70%)' }}
            className="xl:p-[85px] lg:p-[80px] xl:py-8 md:p-[40px]"
        >
            <div className="grid grid-cols-5">
                <div className="col-span-2 flex flex-col space-y-10">
                    <Image
                        src={logo}
                        alt="logo"
                        width={83}
                    />
                    <p className="text-[#011627] max-w-[350px]">
                        Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="flex space-x-12 items-center">
                        <FaFacebook size={30} color="#ED553B" />
                        <FaLinkedin size={30} color="#ED553B" />
                        <FaXTwitter size={30} color="#ED553B" />
                        <FaYoutube size={30} color="#ED553B" />

                    </div>
                </div>
                <div className="">
                    <h2 className="text-[#ED553B] text-xl font-semibold mb-6">COMPANY</h2>
                    <div className="flex flex-col justify-start space-y-2">
                        <Link href="/" className="text-[#263238] font-semibold">HOME</Link>
                        <Link href="/" className="text-[#263238] font-semibold">ABOUT US</Link>
                        <Link href="/books" className="text-[#263238] font-semibold">BOOKS</Link>
                        <Link href="/" className="text-[#263238] font-semibold">EBOOKS</Link>
                        <Link href="/new-release" className="text-[#263238] font-semibold">NEW RELEASE</Link>
                        <Link href="/" className="text-[#263238] font-semibold">CONTACT US</Link>
                        <Link href="/" className="text-[#263238] font-semibold">BLOG</Link>
                    </div>
                </div>
                <div className="col-span-2 space-y-6">
                    <h2 className="text-[#ED553B] text-xl font-semibold mb-6">LATEST NEWS</h2>
                    <div className="flex items-center ">
                        <Image
                            src={footer1}
                            width={100}
                            height={100}
                            alt="footer-logo"
                        />
                        <div className="flex flex-col justify-start space-y-1 ml-8">
                            <h3 className="text-[#ED553B]">Nostrud exercitation</h3>
                            <p className="max-w-[350px]">Nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. </p>
                            <li className="text-[#F6D55C] list-disc text-sm">15 April 2022</li>
                        </div>
                    </div>
                    <div className="flex">
                        <Image
                            src={footer2}
                            className="w-[100px] h-[100px]"
                            alt="footer-logo"
                        />
                        <div className="flex flex-col justify-start space-y-2 ml-8">
                            <h3 className="text-[#ED553B]">Nostrud exercitation</h3>
                            <p className="max-w-[350px]">Nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.</p>
                                <li className="text-[#F6D55C] list-disc text-sm">15 April 2022</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-[40px]">
                <p className="">&copy; 2024 Amin Sharifi. All Right Reserved.</p>
                <p className=""><span className="text-[#ED553B]">Privacy</span> | Term of service</p>
            </div>
        </footer>
    )
}

export default Footer