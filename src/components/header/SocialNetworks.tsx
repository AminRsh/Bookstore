import { Phone } from "lucide-react";
import { BsLinkedin, BsTwitterX, BsFacebook } from "react-icons/bs";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialNetworks() {
    return <section>
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
}