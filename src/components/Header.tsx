import React, { useState } from 'react';
import Image from "next/image";

function Header() {
  return (
    <div className="bg-black" style={{ backgroundImage: 'url("/public/new_media/TopBar.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex justify-center p-4 py-8 gap-5 items-center w-[80%] mx-auto">
        <Image
          src='/public/new_media/BeraChain_Logo.png'
          alt='BeraChain Logo'
          height={60}
          width={60}
        />
      </div>
    </div>
  );
}

export default Header
