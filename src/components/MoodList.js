//MoodList.js
"use client"

import MoodPost from "./MoodCard ";

export default function MoodList({ moods }) {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      {moods.map(mood => <MoodPost key={mood.id} mood={mood}  />)}
    </div>
  );
}

