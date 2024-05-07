"use client"
import React, { useState } from 'react';
import { VscStarEmpty, VscStarFull } from 'react-icons/vsc';
import { Button } from './ui/button';
import { createReview } from '@/lib/actions/review.action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader2 } from 'lucide-react';


interface FeedbackFormProps {
    bookId: number
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ bookId }) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleStarClick = (index: number) => {
        const newRating = index === rating ? 0 : index;
        setRating(newRating);
    }

    const stars = [1, 2, 3, 4, 5].map((star) => (
        <button key={star} onClick={() => handleStarClick(star)}>
            {star <= rating ? <VscStarFull size="32" color="#edde07" /> : <VscStarEmpty size="32" />}
        </button>
    ))

    const handleSubmit = () => {
        setIsSubmitting(true);
        createReview(bookId, rating, review)
            .then(() => {
                toast('Your review submitted successfully!', 
                {
                    position: "bottom-right",
                    autoClose: 9000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                setReview('');
            })
            .catch((error) => {
                toast.error('Failed to submit review.', 
                {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }
            );
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };


    return <div className="flex flex-col p-8 rounded-xl w-full lg:py-12 bg-gray-200">
        <div className="flex flex-col items-center w-full">
            <h2 className="text-xl font-semibold text-center">Your opinion matters!</h2>
            <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">How was your experience?</span>
                <div className="flex space-x-3">
                    {stars}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
                <textarea value={review} onChange={(e) => setReview(e.target.value)} rows={10} placeholder="Message..." className="p-4 rounded-md w-full"></textarea>
                <Button type="submit" onClick={handleSubmit}
                    className="bg-green-500 w-[50%] mt-[50px]"
                    disabled={isSubmitting}
                >
                    <span className="flex items-center justify-center gap-1">
                        {isSubmitting && <Loader2 size={16} className="animate-spin" />}
                        Leave feedback
                    </span>
                </Button>
            </div>
        </div>
        <ToastContainer autoClose={9000} />
    </div>
}

export default FeedbackForm;