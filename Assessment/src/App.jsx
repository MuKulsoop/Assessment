

import './App.css'


//Components
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Footer from './components/Footer/Footer'
import Features from './components/Features/Features'
import Why from './components/Why/Why'



function App() {
  

  return (
    <>
      <div className='m-[40px] flex flex-col items-center '>
        
        <Navbar />
        <Hero />
        <Features />
        <Why />
        <Footer />
    </div>
      
    </>
  )
}

export default App
