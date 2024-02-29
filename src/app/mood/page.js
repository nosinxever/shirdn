//pages.js

"use client"

// import AddMood from "@/components/AddMood";
// import MoodList from "@/components/MoodList";
// import Footer from "@/components/Footer";

export const dynamic = 'force-dynamic'

// export default async function Home() {

//   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mood`);

//   if (!response.ok) {
//     console.log(new Error(`HTTP error! when fetching /api/mood, status: ${response.status}`)) 
//     return (
//       <div>
//         <p>HTTP error! when fetching /api/mood </p>
//         {response.status}
//       </div>
//     )
//   }
  
//   const moods = await response.json();

//   return (
//     <div className="mx-3 ">
//       <AddMood />
//       <MoodList moods={moods}/>
//     </div>

//   )
// }




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

