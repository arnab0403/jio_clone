import React from 'react'

function CategorySection({title,id}) {
  return (
    <div className='py-8 px-6'>
        <h2 id={id} className='text-2xl font-medium mb-6 scroll-m-[100px]'>
            {title}
        </h2>

        <div className='flex gap-4 w-full overflow-scroll border '>
            {new Array(16).fill(0).map((e,index)=>(
                <div kay={index} className='min-w-[200px] h-[300px] rounded-lg bg-red-100'/>
            ))}
        </div>
    </div>
  )
  
}

export default CategorySection