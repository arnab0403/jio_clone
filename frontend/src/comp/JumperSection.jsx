import Link from 'next/link'
import React from 'react'

function JumperSection({list}) {
  return (
    <div className='mt-[64px] flex gap-4 p-6'>
        {
            list.map((item)=>(
                <Link href={`#${item.href}`} key={item.href} className='px-3 py-2 rounded-full bg-white/15 text-sm'>
                    {item.lable}
                </Link>
            ))
        }
    </div>
  )
}

export default JumperSection