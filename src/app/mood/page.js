//pages.js

import AddMood from "@/components/AddMood";
import MoodList from "@/components/MoodList";
import Footer from "@/components/Footer";
export const dynamic = 'force-dynamic'

export default async function Home() {

  return (
    <div className="mx-3 ">
      <AddMood />
      <MoodList />
      <Footer />
    </div>

  )
}




