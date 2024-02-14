// components/ValentinesCard.js
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TypeAnimation } from "react-type-animation";


export default function ValentinesCard() {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-pink-100 m-4 p-4 ">
      <img
        className="w-full rounded-xl"
        src="/valentines-day.png"
        alt="Valentine's Day"
      />
      <div className="px-4 py-4">
        <div className="text-xl mb-2 text-pink-700 " style={{ height: '60px', overflow: 'hidden' }}>
          <TypeAnimation
            sequence={[
              "Meeting you was the best thing that ever happened to me 💖",
              1000,
              "遇见你是我遇见最美好的事情 💖",
              1000,
              "The best Chinese New Year ever 💖",
              1000,
              "这些年,最棒的新年 💖",
              1000,
              "Thankful for the fate 💖",
              1000,
              "感谢缘分 💖",
              1000,
              "Thank you ~ 💖",
              1000,
              "感谢你 ~ 💖",
              1000,
               
            ]}
            speed={50}
            cursor={false}
            repeat={Infinity}
          />
        </div>

        <div className="flex justify-end pt-5">
          <div className="pr-2">
            <Avatar>
              <AvatarImage src="/Evan.jpg" alt="@shadcn" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <Avatar>
              <AvatarImage src="/Shirdn.jpg" alt="@shadcn" />
              <AvatarFallback>XD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}
