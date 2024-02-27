import WishList from "@/components/WishList";

import Footer from "@/components/Footer";

export const dynamic = 'force-dynamic'

export default async function Home() {

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/wishs`);
  
  if (!response.ok) {
    console.log(new Error(`HTTP error! when fetching /api/wishs, status: ${response.status}`)) 
    return (
      <div>
        <p>HTTP error! when fetching /api/wishs </p>
        {response.status}
      </div>
    )
  }
  
  const wishs = await response.json();
  
  return (
    <div >
      <WishList wishs={wishs} />
      <Footer/>

    </div>
  )
}




