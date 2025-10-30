import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Skeleton from "../../../atom/Skeleton"
import { useEffect, useState } from "react"
import { api, ENDPOINT, getUrlDetails, media } from "@/lib/endpoint"
import { InboxIcon } from "lucide-react"
import { useRouter } from "next/navigation"

export function SearchSection() {
  const [open,setOpen]=useState(false);
  const [movieName,setMovieName]=useState("");
  const [isLoading,setIsLoading]=useState(true);
  const [data,setData]=useState([]);
  const handleInputChange = (e)=>{
    setMovieName(e.target.value);
  }

  useEffect(()=>{
    setIsLoading(true);
    const fetchSeachMovie = async()=>{
      if (!movieName) {
        return;
      }
      console.log(movieName);
      const movie =await api.get(ENDPOINT.searchAllMovies(movieName));
      setData(movie.data.media);
      console.log(movie.data);
      setIsLoading(false);
    }
    const movieTimeOut = setTimeout(()=>{
      fetchSeachMovie();
    },2000);

    return ()=>clearTimeout(movieTimeOut);
  },[movieName]);

  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <div>
        <DialogTrigger asChild>
           <div className="rounded-3xl border border-[#383838] lg:flex justify-center items-center px-4 gap-2 hidden  ">
                <Image src="/search.svg" alt="search icon" height={20} width={20} />
                <input
                type="text"
                placeholder="Search..."
                className=" py-2 bg-transparent  text-white font-medium focus:outline-none text-sm max-w-[150px]"
                />
            </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[855px] border-none text-white" >
          <DialogHeader>
            <DialogTitle>Search Anytime</DialogTitle>
          </DialogHeader>
          <Input 
              className=""
              placeholder="F1 The Movie" 
              value={movieName}
              onChange={(e)=>{handleInputChange(e)}} 
          />
            {isLoading ? 
            (
              <div className="w-full flex justify-center gap-4 p-5 overflow-scroll scrollbar-hide">
                <Skeleton className="min-w-[150px] h-[200px] rounded-2xl"/>
                <Skeleton className="min-w-[150px] h-[200px] rounded-2xl"/>
                <Skeleton className="min-w-[150px] h-[200px] rounded-2xl"/>
                <Skeleton className="min-w-[150px] h-[200px] rounded-2xl"/>
                <Skeleton className="min-w-[150px] h-[200px] rounded-2xl"/>
                <Skeleton className="min-w-[150px] h-[200px] rounded-2xl"/>
              </div>
            )
            :  
            (
              <CategorySectionData data={data} setOpen={setOpen} setMovieName={setMovieName}/>
            )
            }
        </DialogContent>
      </div>
    </Dialog>
  )
}



function CategorySectionData({data,setOpen,setMovieName}) {
  const router = useRouter();
  const urlRedirect=(id,type)=>{
    const url = getUrlDetails(id,type);
    router.push(url);
    setOpen(false);
    setMovieName("");
  }

  if (!data || data.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-[300px] py-12">
            <InboxIcon
                className="w-32 h-32 text-slate-400 mb-10"
                strokeWidth={1.2}
            />
            <p className="text-lg text-gray-500">No items found.</p>
        </div>
    );
    }
  return (
    <div className='flex gap-4 w-full overflow-scroll scrollbar-hide py-5'>
            {data.map((vid)=>(
                <div onClick={()=>urlRedirect(vid.id,vid.media_type)} key={vid.id}>
                  <Image alt='image'  height={300} width={200}className='min-w-[150px] h-[200px] rounded-lg object-cover cursor-pointer' src={media(vid.poster_path,"xyz")} quality={30} />
                </div>
            ))}        
    </div>
  )
}