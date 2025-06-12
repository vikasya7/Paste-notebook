
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const ViewPaste = () => {

  const {id}=useParams();
  const allPastes=useSelector((state)=>state.paste.pastes)
  const paste =allPastes.filter((p)=>p._id===id)[0];
  console.log("final paste:", paste);
  

  return (
   <div>
        <div className='flex flex-row gap-7 place-content-between'>
      <input 
      className='p-1 m-1 rounded-2xl bg-black w-[67%] pl-4 mt-2'

      type="text" 
      placeholder='enter title here'
      value={paste.title}
      disabled
      onChange={(e)=>setTitle(e.target.value)}
  
      />

      {/* <button  onClick={createPaste}
      className='p-1  rounded-2xl bg-black text-nowrap'  >
        {
            pasteId ? "Update My Paste" : "Create My Paste"
        }
      </button> */}
    </div>


    <div className='mt-8'>
        <textarea
        className='rounded-2xl mt-4 min-w-[500px] p-4 '
        value={paste.content}
        disabled
        placeholder='enter content here'
        onChange={(e)=>Setvalue(e.target.value)}
        rows={20}

        
        
        />
    </div>
    </div>
  )
}

export default ViewPaste
