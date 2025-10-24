import Link from 'next/link'
import React from 'react'

function JumperSection({list}) {
  return (
    <div className='mt-[64px] flex gap-4 p-6 bg-[#0c0a09] text-white overflow-scroll scrollbar-hide'>
        {
            list.map((item)=>(
                <Link href={`#${item.href}`} key={item.href} className='px-3 py-2  rounded-full bg-white/15 text-sm text-nowrap'>
                    {item.label}
                </Link>
            ))
        }
    </div>
  )
}

export default JumperSection