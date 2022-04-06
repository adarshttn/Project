import React from 'react'
import Navbar from '../../components/Layout/Navbar'
import Rightbar2 from '../../components/rightbar2/Rightbar2'

export default function Viewprofile() {
    return (
        <div className='bg-slate-200 h-screen'>
            <Navbar />
            <div className='flex gap-20 ml-10 mr-20 mt-10 '>
                <div className="rounded-md shadow-xl w-3/4  bg-white h-96">
                    <img src="https://media.istockphoto.com/photos/wide-angle-shot-of-beautiful-reflections-in-colby-lake-during-a-late-picture-id1321208044?b=1&k=20&m=1321208044&s=170667a&w=0&h=EgtB83NWrU_o67dIetfmTH5UEe2MtT2zmabaoLwVh8o=" className="w-full h-32" />
                    <div className="flex justify-left -mt-9 ml-5">
                        <img src="https://randomuser.me/api/portraits/women/81.jpg" className="rounded  border-solid border-white border-2 -mt-3 w-20 h-20" />
                    </div>
                    <div className=" px-3 pb-6 pt-2">
                        <h2 className="text-Black text-3xl bold font-sans">Sarah Wood</h2>
                        <p className="">Sarah wood is co-founder and COO of video ad tech company</p>
                        <p className='mt-2 font-sans font-light text-black'>London . England . United Kingdom . 234 friend</p>
                    </div>
                    <div className="flex  pb-3 ml-5">
                        <div className="text-center mr-3 pr-3">
                            <button className='bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'>addfrinds</button>
                        </div>
                        <div className="text-center mr-3 pr-3 ">
                            <button className='bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'>visit website</button>
                        </div>
                    </div>
                </div>
                <div className='w-1/4'>
                    <Rightbar2 />
                </div>
            </div>
        </div>
    )
}
