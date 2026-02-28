import React from 'react'

const Navbar = () => {
  return (
<>
<div className=' py-5 px-10'>
<div className='container mx-auto bg-black p-7 rounded-2xl border-2 border-[#383737]'>
    <div className='flex justify-between items-center'>
        <div className='flex items-center'>
       <h4>Md Hassan</h4>
        </div>
   
            <ul className='flex items-center gap-5 text-white'>
                <li ><a href="#" className='font-semibold '>Home</a></li>
                <li><a href="#" className='font-semibold'>About</a></li>
                <li><a href="#" className='font-semibold'>Services</a></li>
                <li><a href="#" className='font-semibold'>Contact</a></li>
            </ul>
     
    </div>
</div>
</div>

</>
  )
}

export default Navbar