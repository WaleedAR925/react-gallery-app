import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [userData, setUserData] = useState([]);
  const [Index, setIndex] = useState(1);
  const getData= async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=15`)
    setUserData(response.data);
      }
       useEffect(function(){
            getData();

          },[Index])
      let showUserData = "No Data Available";
      
      if(userData.length>1){
        showUserData = userData.map(function(elem,idx){

          return <div key={idx} className='group relative h-64 w-60 rounded-2xl overflow-hidden bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_28px_rgba(30,58,95,0.25)] hover:-translate-y-1 transition-all duration-300'>
            
            <img className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500' src={elem.download_url} alt="" />

            <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-4 pb-3 pt-12'>
              <h2 className='text-white text-sm font-semibold truncate'>{elem.author}</h2>
            </div>

          </div>

        })
      }

  return (
    <div className='min-h-screen w-full bg-[#E8ECF1] px-6 py-8 text-[#1A1A1A]' >

      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-[#1E3A5F] tracking-wide'>Photo Gallery</h1>
        <p className='text-sm text-[#6B7280] mt-1'>Browse photos from talented photographers</p>
      </div>
      
      <div className='flex flex-wrap gap-6 justify-center text-[#6B7280] font-medium'>{showUserData}</div>

      <div className='flex justify-center items-center gap-4 mt-10'>
        <button className='px-6 py-3 rounded-full bg-[#1E3A5F] hover:bg-[#254a77] text-white font-semibold text-sm shadow-[0_4px_14px_rgba(30,58,95,0.25)] hover:shadow-[0_4px_18px_rgba(30,58,95,0.35)] transition-all duration-200 active:scale-95 cursor-pointer'
         onClick={()=>{
          setIndex(Index-1);
         setUserData([]);
          

         }}>
          Prev</button>

        <span className='px-5 py-2 rounded-full bg-white text-[#1E3A5F] text-sm font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.08)]'>
          Page {Index}
        </span>
         
        <button className='px-6 py-3 rounded-full bg-[#1E3A5F] hover:bg-[#254a77] text-white font-semibold text-sm shadow-[0_4px_14px_rgba(30,58,95,0.25)] hover:shadow-[0_4px_18px_rgba(30,58,95,0.35)] transition-all duration-200 active:scale-95 cursor-pointer'
        onClick={()=>{
          setUserData([]);
          setIndex(Index+1);
          
        }}>
          Next</button>
      </div>
    </div>
    
  )
}

export default App