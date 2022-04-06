import React from 'react'
import Feeds from '../../components/Feeds/Feeds'
import Navbar from '../../components/Layout/Navbar'
import Sidebar1 from '../../components/sidebar1/Sidebar1'
import Sidebar2 from '../../components/sidebar2/Sidebar2'
import Topbar from '../../components/Topbar/Topbar'
import Rightbar1 from '../../components/rightbar1/Rightbar1'
import Rightbar2 from '../../components/rightbar2/Rightbar2'
import "./Home.css"

export default function Home() {
  return (
    <>
    <div className=''>
    <Navbar />
    <div className=' grid grid-cols-3 gap-4  '>
      <div className="col-span-1">
      <Sidebar1 />
      </div>
        
        <div className="col-span-1">
        <Topbar />

        </div>
        <div className="col-span-1">
        <Rightbar1 />
        <Rightbar2 />

        </div>
       
        
       
        
    </div>

    </div>
    
    </>
  )
}
