import React from 'react'

//Components
import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'


function Home() {
  return (
    <>
    
    <div className='m-[30px] flex flex-col items-center'>
        
        <Navbar />
        <Hero />
    </div>
    </>
  )
}

export default Home