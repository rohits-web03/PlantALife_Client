import React from 'react'
import { IoMdClose } from "react-icons/io";

const Modal = ({children,openModal,closeModal}) => {
    if(!openModal) return null
    const handleCloseModal=(event)=>{
        if(event.target.id.includes("modal-bg")){
            closeModal();
        }
    }
  return (
    <div 
        id='modal-bg'
        className='fixed inset-0 bg-black bg-opacity-60 
        backdrop-blur-md flex justify-center items-center'
        onClick={handleCloseModal}
    >
        <div className='relative w-[50%] h-fit bg-white p-6 rounded-xl'>
            <IoMdClose onClick={closeModal} className='text-4xl cursor-pointer absolute top-3 right-3'/>
            {children}
        </div>
    </div>
  )
}

export default Modal