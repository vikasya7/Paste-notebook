import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from "react-icons/md";
import { FaEye, FaShareAlt, FaCalendar  } from "react-icons/fa";
import { FaCopy } from "react-icons/fa6";
const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes)
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('')



  const filteredData = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));


  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));


  }

function shareTab(pasteId){
  const link =`${window.location.origin}/pastes/${pasteId}`
   navigator.clipboard.writeText(link);

  // Show toast
   toast.success("copied to clipboard")


}












  return (
    <div>
      <input type="search"
        className='p-2 rounded-2xl min-w-[600px] mt-5 '
        placeholder='search here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}

      />
      <div className='flex flex-col gap-5 mt-5 border-gray-700 border-2 w-[900px] mx-auto p-5 px-0 pt-[2rem] '>
       <div className='text-3xl font-bold tracking-wide text-white border-b-2 border-blue-500 pb-3 w-full text-center uppercase'>
         <h1 className='  '>All Pastes</h1>
       </div>

        {
          filteredData.length > 0 &&
          filteredData.map(
            (paste) => {
              const formattedDate = new Date(paste.createdAt).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              });
              
                return (
               
                 


                  <div className='border mx-auto w-[800px] flex h-[120px] justify-between' key={paste?._id}>
                  <div className='flex justify-start flex-col content-start items-start '>
                     <div className='text-2xl font-bold p-2 ' >
                    {paste.title}
                  </div>
                  <div className='p-2'>
                    {paste.content}
                  </div>

                  </div>
                  <div className='flex flex-col justify-between   relative '>
                      

                    <div className=' flex gap-1 mt-2 '>
                      <button className=' p-1'>
                      <Link to={`/?pasteId=${paste?._id}`}>
                        <MdEdit className='my-auto    ' />
                      </Link>
                      </button>
                    <button className='p-1'>
                      <Link to={`/pastes/${paste?._id}`}>


                        <FaEye />

                      </Link>
                    </button>
                    <button className='p-1'   onClick={() => handleDelete(paste?._id)}>
                      <Link>
                          <MdDelete />
                      </Link>
                    </button>
                    <button className='p-1'
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("copied")
                    }}>
                     <Link> <FaCopy /></Link>
                    </button>


                    <button className='p-1'
                      onClick={()=>shareTab(paste._id)
                      }   >
                      <Link><FaShareAlt /></Link>
                    </button>

                    

                  </div>

                  <div className=' flex justify-end mb-1 '>
                      <FaCalendar />

                      {formattedDate}
                    </div>


                  </div>

                  



                



                </div>
              )
             
              
            }
          )
        }

      </div>



    </div>
  )
}

export default Paste 
