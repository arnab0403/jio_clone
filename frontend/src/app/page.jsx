import CategorySection from '@/comp/CategorySection'
import HeaderSection from '@/comp/HeaderSection'
import JumperSection from '@/comp/JumperSection'
import React from 'react'

function Home() {
  const list=[
    {
      lable:"Top Rated",
      href:"top-rated"
    },
    {
      lable:"Popular",
      href:"popular"
    },
    {
      lable:"Upcoming",
      href:"upcoming"
    }
  ]
  return (
    <>
      <JumperSection list={list}/>
      <HeaderSection/>
      {list.map((item)=>(
        <CategorySection key={item.href} title={item.lable} id={item.href} />
      ))}
    </>
  )
}

export default Home