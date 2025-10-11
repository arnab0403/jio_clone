import { Button } from '@/components/ui/button'
import { FolderLock } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <div className='h-[100vh] px-6'>
      <h1 className='text-white place-items-start h-[10%] mt-[80px]'>
        Watchlist
      </h1>
      <div className='text-[#94a3b8] h-[90%] flex justify-center items-center flex-col gap-3'>
        <FolderLock size={130} strokeWidth={1}/>
        <p className='text-sm'>Login to see your watchlist</p>
        <Button className="bg-[#e11d48] rounded-2xl mt-2">
          Login
        </Button>
      </div>
    </div>
  )
}

export default page