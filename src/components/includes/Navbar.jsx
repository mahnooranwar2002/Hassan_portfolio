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
   
            <ul className='lg:flex items-center gap-5 text-white hidden'>
                <li ><a href="#" className='font-semibold '>Home</a></li>
                <li><a href="#" className='font-semibold'>About</a></li>
                <li><a href="#" className='font-semibold'>Services</a></li>
                <li><a href="#" className='font-semibold'>Contact</a></li>
            </ul>
     <button className='lg:hidden flex flex-col cursor-pointer'onClick={()=>{alert("aaa")}} >
      menu
      
     </button>
    </div>
</div>
</div>

</>
  )
}

export default Navbar