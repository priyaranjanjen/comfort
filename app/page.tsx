import Image from "next/image";
import { LoginCard } from "./components/auth/LoginCard";
import Map from "../public/loginPage/Map.jpg";

export default function Home() {
  function onClick(){
    
  }
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image 
        src={Map}
        alt="Background Map"
        fill
        className="blur-xs"
        priority
      />
      
      {/* Centered Login Card */}
      <LoginCard />
    </main>
  );
}
