//pages.js

"use client"

export const dynamic = 'force-dynamic'

import { useState, useEffect } from "react";
import AddMood from "@/components/AddMood";
import MoodList from "@/components/MoodList";

export default function Home() {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    const fetchMoods = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mood`);
      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
      } else {
        const moods = await response.json();
        setMoods(moods);
      }
    };

    fetchMoods();
  }, []);

  const addNewMood = (newMood) => {
    setMoods(currentMoods => [...currentMoods, newMood]);
  };

  return (
    <div className="mx-3">
      <AddMood onNewMoodAdded={addNewMood} />
      <MoodList moods={moods} />
    </div>
  );
}

