import { getUrlDetails, media } from '@/lib/endpoint'
import React, { Suspense } from 'react'
import Skeleton from '../../../atom/Skeleton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from 'next/image';
import Link from 'next/link';

async function BannerSection({fetcher}) {
  return(
    <Suspense fallback={<BannerSectionFallback/>}>
      <BannerSectionContent fetcher={fetcher}/>
    </Suspense>
  ) 
}

async function BannerSectionContent({fetcher}) {
  const data = await fetcher();
  return (
    <Carousel
    opts={{
      align:"center",
      loop:true
    }}
    className="w-full px-4  bg-[black]">
      <CarouselContent className="">
        {data.map((vid) => (
          <CarouselItem key={vid.id} className="relative w-full max-w-[700px] h-[500px]  bg-[black] mx-2  rounded-2xl group cursor-pointer">
              <Link href={getUrlDetails(vid.id,vid.media_type)}>
                <Image
                  src={media(vid.backdrop_path)}
                  alt="poster"
                  width={700}
                  height={500}
                  className="rounded-2xl object-cover w-full h-full bg-slate-600 "
                  quality={30}
                  />
                <div className="absolute bottom-0 left-0 w-full h-[30%] 
                                justify-center items-end pb-4
                                text-white text-[27px] 
                                bg-gradient-to-t from-black to-transparent
                                rounded-b-2xl 
                                hidden group-hover:flex transition-all duration-300">
                  <p className="px-2 text-center">{vid.title}</p>
                </div>
              </Link>

          </CarouselItem>
        ))}
      </CarouselContent>
      <div className=' absolute bottom-4 right-[12%] hidden md:flex text-white'>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}

function BannerSectionFallback() {
  return(
    <div className='flex justify-center items-center rounded-lg gap-5 bg-black'>
      <Skeleton className="h-[500px] w-[700px] rounded-lg"/>
      <Skeleton className="h-[500px] w-[700px] rounded-lg"/>
      <Skeleton className="h-[500px] w-[700px] rounded-lg"/>
    </div>
  )
}

export default BannerSection