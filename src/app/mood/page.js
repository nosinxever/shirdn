//pages.js
import AddMood from "@/components/AddMood";
import MoodList from "@/components/MoodList";
import Footer from "@/components/Footer";

export const dynamic = 'force-dynamic'

export default async function Home() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/mood`);

  if (!response.ok) {
    console.log(new Error(`HTTP error! when fetching /api/mood, status: ${response.status}`)) 
    return (
      <div>
        <p>HTTP error! when fetching /api/mood </p>
        {response.status}
      </div>
    )
  }
  
  const moods = await response.json();

  return (
    <div className="mx-3 ">
      <AddMood />
      <MoodList moods={moods}/>
    </div>

  )
}




