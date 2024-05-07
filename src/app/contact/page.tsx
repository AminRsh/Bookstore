"use client"
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";


export default function Page() {
    const { user } = useUser();
    const userImg = user?.imageUrl

    return <div className="flex flex-col items-center my-[100px]">
            {userImg && <Image src={userImg} width={100} height={100} alt="user" />}
    
    </div>
}
