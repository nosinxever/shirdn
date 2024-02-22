//WishList.js

"use client"

import WishCard from "./WishCard";
import AddWish from "./AddWish";

import React, { useEffect, useState } from 'react';

export default function WishList({ wishs }) {
    const [backgroundImage, setBackgroundImage] = useState(`url("/Twinkle Star.svg")`);

    useEffect(() => {
        // Function to update the background image based on screen width
        const updateBackgroundImage = () => {
            if (window.innerWidth <= 768) { // Assuming 768px is the breakpoint for mobile devices
                setBackgroundImage(`url("/Tinkle Start mobile.svg")`);
            } else {
                setBackgroundImage(`url("/Twinkle Star.svg")`);
            }
        };

        // Add event listener on mount
        window.addEventListener('resize', updateBackgroundImage);
        // Call it initially in case the initial load is on mobile
        updateBackgroundImage();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', updateBackgroundImage);
    }, []);

    const backgroundStyle = {
        backgroundColor: '#ee5522', // Fixed the color code (had an extra #)
        backgroundImage: backgroundImage,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
    };

    return (
        <div style={backgroundStyle} className="flex flex-col items-center justify-center min-h-screen p-6">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishs.map(wish => <WishCard key={wish.id} wish={wish} className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg" />)}
            </div>
        </div>
    );
}
