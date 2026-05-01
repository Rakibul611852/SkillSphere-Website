import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
   <div className="bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')] h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
  
  {/* Overlay */}
  <div className="w-full h-full rounded-lg bg-black/60 flex items-center">
    
    <div className="max-w-7xl mx-auto px-6 text-white">
      
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
        Upgrade Your Skills Today 🚀
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
        Learn Web Development, Design, Marketing and more from industry experts.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        
        <Link href="/courses">
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition">
            Explore Courses
          </button>
        </Link>

        <Link href="/login">
          <button className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black transition">
            Get Started
          </button>
        </Link>

      </div>

    </div>
  </div>
</div>
  );
};

export default Banner;