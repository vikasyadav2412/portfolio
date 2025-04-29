import React from 'react'
import { IoMdMail } from "react-icons/io";
import { MdAddCall } from "react-icons/md";
import Form from './Form';


const Contact = () => {
  return (
    <div className='w-full text-black dark:text-white py-20 flex flex-col' id='contact'>
      <div className='my-10'>
        <h1 className='text-4xl md:text-6xl font-bold'>
          con<span className='text-[#01a2e6] underline'>T</span>act
        </h1>
      </div>
      <div className='flex gap-10 md:gap-3 flex-col md:flex-row p-2 dark:p-0 items-center justify-center shadow-2xl py-5'>
        <div className='flex-1 flex flex-col gap-3'>
          <h2 className='text-2xl font-bold font-serif'>Send Us Message</h2>
          <p className='font-serif text-md'>
            I'm always open to exciting opportunities and collaborations! Whether it's for a project, job inquiry, or just to say hello, feel free to reach out. You can contact me via email mention below or connect with me directly calling on my moble or whatsapp me.
          </p>
          <div className='flex flex-col gap-4'>
            <p className='flex items-center gap-2'>
              <div className='text-3xl text-[#01a2e6]'>
                <IoMdMail />
              </div> : <a href="mailto:msvarunvikas24122004@gmail.com">msvarunvikas24122004@gmail.com</a></p>
            <p className='flex items-center gap-2'><div className='text-3xl text-[#01a2e6]'><MdAddCall /> </div>: 
            <a href="callto:7508794201">9058012133</a></p>
          </div>
        </div>
        <div className='flex-1 w-full'>
          <Form />
        </div>

      </div>
    </div>
  )
}

export default Contact