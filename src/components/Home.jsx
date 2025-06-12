import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import { FaRegCopy } from "react-icons/fa";
import toast from 'react-hot-toast';



const Home = () => {
    const[title,setTitle]=useState('');
    const [value,Setvalue]=useState('');
    const [searchParams,setSearchParams]=useSearchParams();
    const pasteId= searchParams.get("pasteId")
    const dispatch=useDispatch();
    const allPastes=useSelector((state)=>state.paste.pastes)


       useEffect(() => {
           if( pasteId !== "undefined" && allPastes.length > 0){
            const paste=allPastes.find((p)=>p._id===pasteId)
             if (paste) {
            setTitle(paste.title);
             Setvalue(paste.content);
            }
           }
            
        }, [pasteId])


    function createPaste(){
        const paste={
            title:title,
            content:value,
            _id:pasteId || 
             Date.now().toString(36),
             createdAt:new Date().toLocaleDateString('en-GB',{
                day:'2-digit',
                month:'short',
                year:'numeric',
             })
        }

     
        





        if(pasteId){
            //update
            dispatch(updateToPastes(paste));

        }
        else{
            //create
            dispatch(addToPastes(paste));

        }

        // after creation or updation
        setTitle('');
        Setvalue('');
        setSearchParams({});

    }



  return (
    <div>
        <div className=' gap-1 mt-2 '>
      <input 
      className='p-1 m-1 rounded-2xl bg-black w-[60%] pl-6 mt-2'

      type="text" 
      placeholder='enter title here'
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
  
      />

      <button  onClick={createPaste}
      className='p-1  rounded-2xl bg-black text-nowrap'  >
        {
            pasteId ? "Update My Paste" : "Create My Paste"
        }
      </button>
    </div>


    <div className='mt-8'>

      <div className='w-[870px] mx-auto items-center flex justify-end  h-7'>
        <FaRegCopy className='cursor-pointer'
           onClick={()=>{
          navigator.clipboard.writeText(value)
          toast.success("copied")
          
        }} />

      </div>
        <textarea
        className=' mt-0 min-w-[870px] p-4 '
        value={value}
        placeholder='enter content here'
        onChange={(e)=>Setvalue(e.target.value)}
        rows={20}

        
        
        />
    </div>
    </div>
  )
}

export default Home
