//WishList.js
"use client"

import AddMood from "./AddMood";
import MoodPost from "./MoodCard ";

export default function MoodList() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
          <MoodPost
        username="Shirdn"
        handle="Shirdn"
        avatar="Shirdn.jpg"
        content="为丹儿提供吐槽我的地方"
        timestamp="15m"
      />
      <MoodPost
        username="Shirdn"
        handle="Shirdn"
        avatar="Shirdn.jpg"
        content="为丹儿提供表扬我的地方"
        timestamp="10m"
      />
      <MoodPost
        username="Shirdn"
        handle="Shirdn"
        avatar="Shirdn.jpg"
        content="为丹儿提供吐槽我的地方"
        timestamp="15m"
      />
    </div>
  );
}
