import { Button } from '@/components/ui/button';
import { api, ENDPOINT } from '@/lib/endpoint'
import React from 'react'

async function page ({ searchParams : {id} }) {
  
  const details = (await api.get(ENDPOINT.getTvShowsDetails(id))).data.media.results[0];
  return (
    <div className='h-[100vh] w-full pt-[80px]'>
        <div className='h-[90%]'>
            <iframe  src={`https://www.youtube.com/embed/${details.key}`} className='h-full w-full'></iframe>
        </div>
        <div className='w-[100%] h-[10%] gap-4 px-4 flex items-center border'>
            <p className='text-white'>{details.name}</p>
            <Button className="bg-[#e11d48]">Share</Button>
        </div>
    </div>
  )
}

export default page