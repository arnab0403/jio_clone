"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import ProfileSheet from './ProfileSheet';

export const navLinks = [
{ name: "Home", key: "", href: "/" },
{ name: "Movies", key: "movies", href: "/movies" },
{ name: "Tv Shows", key: "tv", href: "/tv" },
{ name: "Watchlist", key: "watchlist", href: "/watchlist" },
{ name: "Jio+", key: "jio+", href: "/jio+" },
];

function Headers() {
    const path = usePathname();
    const activeTabKey = path.split("/")[1];
  return (
    <header className='w-[100vw] py-4 fixed top-0 z-50 border-b-2 border-b-[#353535] bg-[#080e10] '>
        <div className='mx-auto px-4 flex items-center text-nowrap'>
            <div className='flex items-center'>
                <Link href="/">
                    <Image src="/logo.svg" width={400} height={136} className='' alt='Image'/>
                </Link>
                <Link href="/subscription" className='border text-[#c1a362] font-medium border-[#c1a362] px-6 py-1 flex items-center justify-center gap-2 rounded-[23px] ml-4 mr-4 '>
                    <Image src="/crown.svg"  width={16} height={16} alt='image'/>
                    <span className='text-[16px]'>Go Premium</span>
                </Link>
            </div>
            <nav className="flex gap-4">
                {navLinks.map(item=>(
                    <Link href={item.href} key={item.key} className={`px-1 py-2 text-[16px] font-medium text-[#b6b8b8] hover:text-white gap ${activeTabKey === item.key
                ? "border-b-2 border-pink-500 text-white"
                : ""
                }`} >
                        {item.name}
                    </Link>
                ))}
            </nav>
            
            <div className="flex items-center justify-end  w-full pr-4">
                <div className="rounded-3xl border border-[#383838] lg:flex justify-center items-center px-4 gap-2 hidden">
                    <Image src="/search.svg" alt="search icon" height={20} width={20} />
                    <input
                    type="text"
                    placeholder="Search..."
                    className=" py-2 bg-transparent  text-white font-medium focus:outline-none text-sm max-w-[150px]"
                    />
                </div>
                <ProfileSheet/>
            </div>

        </div>
    </header>
  )
}

export default Headers