// components/ValentinesCard.js
"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ValentinesCard() {
  const [message, setMessage] = useState("");
  const fullMessage =
    "Meeting you was the best thing that ever happened to me 💖";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullMessage.length) {
        setMessage((prev) => prev + fullMessage.charAt(index)); // Use charAt() for safer string indexing
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-pink-100 m-4 p-4 ">
      <img className="w-full rounded-xl" src="/valentines-day.jpg" alt="Valentine's Day" />
      <div className="px-6 py-4">
        <div className="text-xl mb-2 text-pink-700">{message}</div>
        {/* <p className="text-gray-700 text-base pb-5">{message}</p> */}
        <div className="flex justify-end pt-5">
          <div className="pr-2">
            <Avatar>
              <AvatarImage src="/Shirdn.jpg" alt="@shadcn" />
              <AvatarFallback>XD</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <Avatar>
              <AvatarImage src="/Evan.jpg" alt="@shadcn" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* <div>
          <Avatar className="h-20 w-20">
            <AvatarImage src="/1.png" alt="@shadcn" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
        </div> */}
      </div>
    </div>
  );
}
