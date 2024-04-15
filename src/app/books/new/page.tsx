import { Metadata } from "next";
import NewBookForm from "./NewBookForm";

export const metadata: Metadata = {
    title: "Post a new Job"
}


export default function page() {
    return <NewBookForm />
}