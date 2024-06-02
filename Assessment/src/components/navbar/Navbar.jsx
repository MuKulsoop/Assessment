import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-row max-w-[1090px] w-full h-[60px] items-center justify-between'>
        <div className='flex flex-row justify-center'>
            <div className='flex flex-row justify-center m-0 mr-10 p-0 cursor-pointer z-30'>
                <span className='pr-2'><img src="https://res.cloudinary.com/dl5umecqi/image/upload/v1717314249/mzmc23xebiqbqw1eh80w.png" alt="logo" /></span>
                <img src="https://res.cloudinary.com/dl5umecqi/image/upload/v1717315593/vufpanckk5vuy3iiipse.png" alt="uifry" />
            </div>
            <div className='flex items-center justify-center'>
            <ul className=' flex flex-row list-none text-xl justify-center font-semibold items-center z-30'>
                <li className=' mr-3 tracking-tight hover:text-[#FF5555] cursor-pointer'>Home</li>
                <li className=' mr-3 tracking-tight hover:text-[#FF5555] cursor-pointer'>AboutUs</li>
                <li className=' mr-3 tracking-tight hover:text-[#FF5555] cursor-pointer'>Pricing</li>
                <li className=' mr-3 tracking-tight hover:text-[#FF5555] cursor-pointer'>Features</li>
            </ul>
            </div>
        </div>
        <div className='button text-white bg-black h-full flex justify-center rounded-lg w-[180px] text-lg cursor-pointer z-30'>
            <button>Download</button>
        </div>
    </div>
  )
}

export default Navbar