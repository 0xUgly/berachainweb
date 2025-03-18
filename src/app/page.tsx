import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image';

interface PageProps {}

function page(props: PageProps) {
  return (
    
      <div className="bg-black min-h-screen flex flex-col items-center" style={{ backgroundImage: 'url("/public/new_media/Bg_Img.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Header />
        <div className="text-white text-2xl font-bold mt-8">Bearly Alive</div>
        <div className="mt-8 p-4 rounded-lg shadow-md bg-white w-full max-w-md">
          <Image
            src="/public/new_media/ICON_image.png"
            alt="Game Icon"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
            PLAY
          </button>
        </div>
        {/* Add your footer/navigation components here */}
      </div>
    
  );
}

export default page
