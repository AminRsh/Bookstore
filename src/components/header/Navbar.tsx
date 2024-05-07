

import Image from "next/image";;
import LogoImage from "@/assets/logo.png";
import SearchBar from "./SearchBar";
import SocialNetworks from "./SocialNetworks";
import Auth from "./Auth";
import Menu from "./Menu";


const Navbar = () => {

    return (
        <nav>
            <SocialNetworks />

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

                <div className="flex justify-center items-center space-x-2">
                    <Auth />
                </div>
            </section>


            <div className="flex items-cente mt-4 max-w-[95%]  mx-auto px-8">
                <div className="flex-1 border-t-[3px] border-gray-200"></div>
            </div>
            <section className="z-30">
                <Menu />
            </section>

        </nav>
    );
};

export default Navbar;
