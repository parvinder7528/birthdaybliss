import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
// import { Footer } from "";

import BackgroundFloat from "@/components/BackgroundFloat";



const Index = () => {
  return (
    <>
       <div className="relative min-h-screen bg-background overflow-hidden">
    <BackgroundFloat />
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
      <Home/>
      </main>
      <Footer />
    </div>
    </div>
    </>
  );
};

export default Index;