import { Button } from "@/components/ui/button";
import Link from "next/link";
import imagePath from "@/assets/403.png"
import Image from "next/image";


export default function page() {
    return (

            <div className="flex flex-col justify-center items-center mb-10">
                <Image
                    src={imagePath}
                    alt="403"
                    width={800}
                    height={400}
                />
                <Button className="bg-green-400" size="lg"  asChild>
                    <Link href="/">Go to Home</Link>
                </Button>
            </div>

    );
}
