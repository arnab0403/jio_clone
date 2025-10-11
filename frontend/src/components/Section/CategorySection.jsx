import React, { Suspense } from 'react'
import Skeleton from '../../../atom/Skeleton'
import { media } from '@/lib/endpoint'
import Image from 'next/image';

function CategorySection({title,id,fetcher}) {
  return (
    <div className='py-8 px-6 bg-[#0c0a09] text-[white]'>
        <h2 id={id} className='text-2xl font-medium mb-6 scroll-m-[100px]'>
            {title}
        </h2>
      <Suspense fallback={<CategorySectionFallback/>}>
        <CategorySectionData fetcher={fetcher}/>
      </Suspense> 

        
    </div>
  )
  
}

async function CategorySectionData({fetcher}) {
  const data = await fetcher();
  console.log(data)
  return (
    <div className='flex gap-4 w-full overflow-scroll scrollbar-hide'>
            {data.map((vid)=>(
                <Image key={vid.id} alt='image'  height={300} width={200}className='min-w-[200px] h-[300px] rounded-lg object-cover cursor-pointer' src={media(vid.poster_path)} quality={30}/>
            ))}        
    </div>
  )
}


async function CategorySectionFallback() {
 return(
      <div className='flex gap-4 w-full overflow-scroll scrollbar-hide'>
            {new Array(16).fill(0).map((e,index)=>(
                <Skeleton key={index} className='min-w-[200px] h-[300px] rounded-lg'/>
            ))}
      </div>
 )

}

export default CategorySection