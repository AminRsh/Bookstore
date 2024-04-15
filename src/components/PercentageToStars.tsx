import React from 'react';
import { VscStarFull, VscStarHalf, VscStarEmpty } from "react-icons/vsc";

const PercentageToStars = ({ rating }: { rating: number }) => {
    
    const percentage = (rating / 30) * 100;
    const fullStarsCount = Math.round((percentage / 100) * 5);
    const remainder = (percentage / 100) * 5 - fullStarsCount;

    const stars: React.ReactNode[] = [];
    for (let i = 0; i < 5; i++) {
        if (i < fullStarsCount) {
            stars.push(<span key={i}><VscStarFull color="Ffd700"/></span>);
        } else if (i === fullStarsCount && remainder >= 0.5) {
            stars.push(<span key={i}><VscStarHalf color="Ffd700"/></span>);
        } else {
            stars.push(<span key={i}><VscStarEmpty color="Ffd700"/></span>);
        }
    }

    return (
        <div className="flex">
            {stars}
        </div>
    );
};

export default PercentageToStars;
