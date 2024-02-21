import ValentinesCard from "./components/ValentinesCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <div className="flex flex-col	 items-center h-screen bg-pink-50">
      <p className="font-bold text-2xl my-8 text-pink-700 justify-center items-center"> Happy Valentine's Day!</p>
      <ValentinesCard />
    </div>
    <Footer />
    </>
    
  );
}
