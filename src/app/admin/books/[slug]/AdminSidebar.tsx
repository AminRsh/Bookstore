"use client"
import FormSubmitButton from '@/components/FormSubmitButton';
import { Book } from '@prisma/client';
import { useFormState } from 'react-dom';
import { approveSubmission, deleteJob } from './actions';

interface AdminSidebarProps {
    book : Book
}

export default function AdminSidebar({book}: AdminSidebarProps) {
    return <aside className="flex w-[200px] flex-none flex-row items-center md:flex-col md:items-stretch gap-2">
        {
            book.approved ? (
                <span className="text-center font-semibold text-green-500">Approved</span>
            ): (
                <ApproveSubmissionButton bookId={book.id} />
            )
        }
        <DeleteButton bookId={book.id} />
    </aside>
}

interface ApproveSubmissionProps {
    bookId: number
}

function ApproveSubmissionButton({bookId}: ApproveSubmissionProps) {

    const [formState, fromAction] = useFormState(approveSubmission, undefined)
    return <form action={fromAction} className='space-y-1'>
        <input hidden name="bookId" value={bookId} />
        <FormSubmitButton className="w-full bg-green-500 hover:bg-green-600 ">
            Approve
        </FormSubmitButton>
        {
            formState?.error && (
                <p className="text-sm text-red-500">{formState.error}</p>
            )
        }
    </form>
}

function DeleteButton({bookId}: ApproveSubmissionProps) {

    const [formState, fromAction] = useFormState(deleteJob, undefined)
    return <form action={fromAction} className='space-y-1'>
        <input hidden name="bookId" value={bookId} />
        <FormSubmitButton className="w-full bg-red-500 hover:bg-red-600 ">
            Delete
        </FormSubmitButton>
        {
            formState?.error && (
                <p className="text-sm text-red-500">{formState.error}</p>
            )
        }
    </form>
}