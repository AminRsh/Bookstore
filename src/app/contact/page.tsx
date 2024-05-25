import amin from "@/assets/amin.jpg"
import Image from "next/image"
import { MdAttachEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";

export default function Page() {

    return <div className="w-[50%] mx-auto my-[80px] py-[25px] bg-gray-200 rounded-lg">
        <div className="flex justify-around items-center space-x-2">
            <Image src={amin} alt="amin" className="w-[200px] h-[200px] rounded-full" />
            <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                    <MdAttachEmail size="26" color="#2563eb" />
                    <a href="mailto:amin.sharifi45@gmail.com" target="_blank" className="hover:text-red-600 text-blue-600 delay-150">Amin.sharifi45@gmail.com</a>
                </div>
                <div className="flex items-center space-x-4">
                    <BsLinkedin size="22" color="#2563eb" />
                    <a href="https://linkedin.com/in/mohammadamin-roknsharifi" target="_blank" className="hover:text-red-600 text-blue-600 delay-150">Linkedin/AminRsh</a>
                </div>
                <div className="flex items-center space-x-4">
                    <FaSquareGithub size="26" color="#2563eb" />
                    <a href="https://github.com/AminRsh" target="_blank" className="hover:text-red-600 text-blue-600 delay-150">Github/AminRsh</a>
                </div>
            </div>
        </div>

    </div>
}
