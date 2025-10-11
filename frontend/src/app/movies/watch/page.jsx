import { api, ENDPOINT } from '@/lib/endpoint'
import React from 'react'

async function page ({ searchParams : {id} }) {
  
  const details = (await api.get(ENDPOINT.getMovieDetails(id))).data.media.results[0];
  return (
    <div className='h-[100vh] w-[100vw] pt-[80px]'>
        <div className='h-[90%]'>
            <iframe  src={`https://www.youtube.com/embed/${details.key}`} className='h-full w-full'></iframe>
        </div>
        <div className=''></div>
    </div>
  )
}

export default page