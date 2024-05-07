"use client";

import LoadingButton from "@/components/LoadingButton";
import RichTextEditor from "@/components/RichTextEditor";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import H1 from "@/components/ui/h1";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreateBookValues, createBookSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { draftToMarkdown } from "markdown-draft-js";
import { useForm } from "react-hook-form";
import { createBookPosting } from "@/lib/actions/book.actions";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from 'next/navigation'


export default function NewBookForm() {

    const router = useRouter()
    const form = useForm<CreateBookValues>({
        resolver: zodResolver(createBookSchema),
    });
    
    const { handleSubmit, control, setFocus, formState: { isSubmitting } } = form;
    
    async function onSubmit(values: CreateBookValues) {
        const formData = new FormData();
        
        Object.entries(values).forEach(([key, value]) => {   
            if (value) {
                if (typeof value === 'string' || value instanceof Blob) {
                    formData.append(key, value);

                }
            }
        });

        try {
            await createBookPosting(formData)
            .then(() => {
                toast('Your book registered successfully!', 
                {
                    position: "bottom-right",
                    autoClose: 2900,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                
                setTimeout(() => {
                    router.push("/books");
                }, 4000);
            })

        } catch (error) {
            console.error("Error creating book:", error);
            alert("Something went wrong, please try again.");
        }
    }

    return (
        <main className="m-auto my-10 max-w-3xl space-y-10">
            <div className="space-y-5 text-center">
                <H1>Find your favorite book</H1>
                <p className="text-muted-foreground">
                    Ask for your favorite book
                </p>
            </div>
            <div className="space-y-6 rounded-lg border p-8">
                <div>
                    <h2 className="font-semibold">Book details</h2>
                    <p className="text-muted-foreground">
                        Provide a book description and details
                    </p>
                </div>
                <Form {...form}>
                    <form
                        className="space-y-4"
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <FormField
                            control={control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Book title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. To Kill a Mockingbird" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="author"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Author</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. J.K Rowling" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. Drama" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="publisher"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Publisher</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. J.B. Lippincott & Co." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="isbn"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>ISBN</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. 9780747532743" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="language"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Language</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g. French" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Price</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="number" defaultValue="0" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="pages"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Page Numbers</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="number" defaultValue= "0"  />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="rating"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Rating</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="number" defaultValue="0" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="coverImg"
                            render={({ field: { value, ...fieldValues } }) => (
                                <FormItem>
                                    <FormLabel>Book Cover Image</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...fieldValues}
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                fieldValues.onChange(file);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <Label onClick={() => setFocus("description")}>
                                        Description
                                    </Label>
                                    <FormControl>
                                        <RichTextEditor
                                            onChange={(draft) =>
                                                field.onChange(draftToMarkdown(draft))
                                            }
                                            ref={field.ref}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <LoadingButton type="submit" loading={isSubmitting}>
                            Submit
                        </LoadingButton>
                    </form>
                </Form>
            </div>
            <ToastContainer autoClose={2900} />
        </main>
    );
}
