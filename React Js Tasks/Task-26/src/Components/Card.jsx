import React from "react";

function Card({ image, cardNumber, description }) {
    return (
       
            <div className="flex flex-col items-center gap-1.5 border-2 border-red-500 w-[400px] p-12 m-12 text-amber-50">
                <img
                    className="w-[220px] h-auto"
                    src={image}
                    alt="image"
                />

                <h2>{cardNumber}</h2>

                <p>{description}</p>
            </div>
        
    );
}

export default Card;