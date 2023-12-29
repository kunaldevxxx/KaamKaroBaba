import React from 'react'
import { MdInsertDriveFile } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"
function Card({Data,reference}) {
  return (
    <>
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragTransition={{ bounceStiffness: 100, bounceDamping: 25 }} dragElastic={.1} className='relative w-60 h-72 bg-[#3f4f8663] rounded-[40px] text-[#f3f3ef] px-8 py-10 overflow-clip'>
<MdInsertDriveFile />

<p className='text-sm leading-snug mt-4 font-medium'>{Data.desc}</p>
<div className='footer absolute bottom-0  w-full    left-0'>
    <div className='flex items-center justify-between px-8 py-3 mb-2'>
        <h5>{Data.time}</h5>
       <span className='w-6 h-6 bg-[#C2F1F7] rounded-full flex items-center justify-center text-black'> {Data.complete ? <IoMdCloseCircleOutline /> :<HiOutlineDownload/>
}</span>

    </div>
    {
        Data.tag.isOpen && (<div className={`tag w-full py-4 ${Data.tag.tagcolor==="blue"? "bg-green-400" :"bg-[#FD531D]"} justify-center items-center flex`}>
        <h3 className='text-sm font-semibold'> 
     {Data.tag.tagTitle}
        </h3>
    </div>)
    }
    
</div>
</motion.div>
    </>
  )
}

export default Card