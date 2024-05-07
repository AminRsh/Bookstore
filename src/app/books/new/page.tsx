
import { Metadata } from "next";
import NewBookForm from "./NewBookForm";
import { currentUser } from "@clerk/nextjs/server";


export const metadata: Metadata = {
    title: "Post a new Job"
}

export default async function Page() {

    const user = await currentUser()

    return (
        <div>
            <h1 className="text-center font-semibold">Welcome Dear {user?.firstName} {user?.lastName}</h1>
            <NewBookForm />
        </div>
    );
}
