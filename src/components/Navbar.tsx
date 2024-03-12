"use client"
import { AudioLines, CircleDollarSign, LayoutGrid, UserPlus } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import UpgradePlan from './UpgradePlan';

const Navbar = () => {
  const [pathName, setPathName] = useState("My Projects")

  function handleNav(e: React.MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLAnchorElement
    setPathName(target.innerText)
  }
  return (
    <nav className='flex flex-col justify-between h-[80vh] border-2 border-customGray rounded-lg p-4 w-60'>
      <div className='flex flex-col gap-8'>
        <Logo />
        <div className='flex flex-col text-gray-500 gap-4' onClick={(e) => handleNav(e)}>
          <Link href="#" className={`navItem ${pathName === "My Projects" && "activeNavItem"}`}><LayoutGrid /> My Projects</Link>

          <Link href="#" className={`navItem ${pathName === "AI Avatars" && "activeNavItem"}`} ><UserPlus />AI Avatars</Link>

          <Link href="#" className={`navItem ${pathName === "Voices" && "activeNavItem"}`}><AudioLines /> Voices</Link>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <UpgradePlan />
        <Link href="#" className='btnTernary'><CircleDollarSign />Pricing</Link>
      </div>
    </nav>
  )
}

export default Navbar
