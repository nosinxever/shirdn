// components/ValentinesCard.js
'use client'

import { useEffect, useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ValentinesCard() {
  const [message, setMessage] = useState('');
  const fullMessage = 'Happy Valentine\'s Day! 💖';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      // Update to check if index is within the bounds of fullMessage
      if (index < fullMessage.length) {
        setMessage((prev) => prev + fullMessage[index]);
        index++;
      } else {
        clearInterval(timer); // Clear interval when the end of the message is reached
      }
    }, 150); // Adjust typing speed as needed
  
    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);
  

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-100 m-4 p-4">
      <img className="w-full" src="/valentines-day.jpg" alt="Valentine's Day" />
      <div className="px-6 py-4">

        <div className="font-bold text-xl mb-2 text-pink-700">
        {message}
        </div>

        <p className="text-gray-700 text-base pb-5">
          Meeting you is the best thing happen to me 💖
        </p>
        <div className="flex ">
          <div className="pr-10">
            <Avatar>
              <AvatarImage src="/Shirdn.jpg" alt="@shadcn" />
              <AvatarFallback>XD</AvatarFallback>
            </Avatar> 
          </div>
          <div >
            <Avatar>
              <AvatarImage src="/Evan.jpg" alt="@shadcn" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}
