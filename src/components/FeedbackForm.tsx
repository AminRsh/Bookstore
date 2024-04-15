"use client"
import React, { useState } from 'react';
import { VscStarEmpty, VscStarFull } from 'react-icons/vsc';
import { Button } from './ui/button';
// import FeedbackSubmit from './FeedbackSubmit.server';


export default function FeedbackForm() {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    // console.log(rating);
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
        // Submit the feedback to the server component
        // <FeedbackSubmit rating={rating} comment={comment} />;
    };


    return <div className="flex flex-col p-8 rounded-xl lg:p-12 w-full">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-xl font-semibold text-center">Your opinion matters!</h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                    <span className="text-center">How was your experience?</span>
                    <div className="flex space-x-3">
                        {stars}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)}  rows={10} placeholder="Message..." className="p-4 rounded-md w-full"></textarea>
                    <Button type="button" onClick={handleSubmit} className="bg-green-500 w-[50%] mt-[50px]">Leave feedback</Button>
                </div>
            </div>
        </div>
}