//MoodList.js
"use client"

import MoodPost from "./MoodCard ";

export default function MoodList({ moods }) {
  return (
    <div className="flex flex-col items-center justify-center py-2">
          <MoodPost
        username="Shirdn"
        handle="Shirdn"
        avatar="Shirdn.jpg"
        content={mood.title}
        timestamp="15m"
      />
    </div>
  );
}

