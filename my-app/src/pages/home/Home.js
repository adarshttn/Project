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
    <Navbar />
    <div className=' grid grid-cols-4 gap-7 h-full mt-7 ml-20 mr-20  '>
        <Sidebar1 />
        
        <Topbar />
       
        <Rightbar1 />
        <Sidebar2 />
        <Feeds />
        <Rightbar2 />
    </div>
    </>
  )
}
