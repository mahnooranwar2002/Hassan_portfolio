import React from 'react';

const HeroSection = () => {
  return (
   <>
    <div className='flex gap-10  flex-col lg:flex-row '>
    <div className='w-full lg:w-5/12   lg:px-10 lg:py-30  p-8 '>
   

  <span className='text-[#FFFFFF59] text-xl  font-regular uppercase  block'>
    Hello, i’m
  </span>

  <h1 className='text-[#C9F31D] font-semibold tracking-tight  text-6xl leading-none mb-2'>
    Md Hassan
  </h1>
  

  <h2 className='text-white text-4xl font-regular mb-4'>
    Digital Marketer
  </h2>
  

  <p className='text-[#8B8B8B] text-lg leading-relaxed max-w-md mt-5'>
    We denounce with righteous indignation dislike demoralized by the charms of pleasure.
  </p>
  

<button className="group relative inline-block px-10 py-4 overflow-hidden rounded-md border border-[#C9F31D] font-bold text-black bg-[#C9F31D] transition-all duration-300 ease-in-out hover:text-white mt-5 hover:shadow-lg  shadow-[#070707]">
  

  <span className="absolute left-1/2 top-full h-[180%] w-[140%] -translate-x-1/2 rounded-[50%] bg-black/5 transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] group-hover:-top-[35%] group-hover:scale-x-[0.8] group-hover:scale-y-[1.3] z-0"></span>

  <span className="absolute left-[55%] top-[180%] h-[190%] w-[160%] -translate-x-1/2 rounded-[50%] bg-black transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] group-hover:-top-[45%] group-hover:scale-x-[0.8] group-hover:scale-y-[1.3] z-0"></span>


  <span className="relative z-10">Download CV</span>
</button>
<button className="group relative ml-2 inline-block px-10 py-4 overflow-hidden rounded-md border hover:border-[#C9F31D] font-bold text-black bg-white transition-all duration-300 ease-in-out hover:text-white mt-5 hover:shadow-lg  shadow-[#070707]">
  

  <span className="absolute left-1/2 top-full h-[180%] w-[140%] -translate-x-1/2 rounded-[50%] bg-black/5 transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] group-hover:-top-[35%] group-hover:scale-x-[0.8] group-hover:scale-y-[1.3] z-0"></span>

  <span className="absolute left-[55%] top-[180%] h-[190%] w-[160%] -translate-x-1/2 rounded-[50%] bg-black transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] group-hover:-top-[45%] group-hover:scale-x-[0.8] group-hover:scale-y-[1.3] z-0"></span>


  <span className="relative z-10">Hire me</span>
</button>
    </div>
  <div className='flex justify-evenly flex-col lg:p-0 p-8 lg:flex-row gap-15 mt-5 py-10 lg:w-6/12 '>
    <div className='border-4 bg-[#C9F31D]  border-gray-800/20 p-9 rounded-t-[40%] overflow-hidden'>
      <div className='bg-[#C9F31D]   '>
          <img src="https://wp.webtend.net/noxfolio/wp-content/uploads/2023/11/me.png"  className=' ' alt="" />
      </div>
    </div>
<div className='lg:w-4/12 w-full  '>
<div className=' h-full'>
    <ul className='bg-[#070707] px-5 py-4 mt-10  rounded-2xl'>
        <li className='my-5 border-b-2  border-gray-500 p-2'>
            <h3 className='text-[#C9F31D] text-4xl font-bold mb-2 '>13+</h3>
            <p className='text-[#8B8B8B]'>Years of experience</p>
        </li>
        <li className='my-5 border-b-2  border-gray-500 p-3'>
            <h3 className='text-[#C9F31D] text-4xl font-bold mb-2 '>13+</h3>
            <p className='text-[#8B8B8B]'>Years of experience</p>
        </li>
        <li className='my-5 border-b-2  border-gray-500 p-3'>
            <h3 className='text-[#C9F31D] text-4xl font-bold mb-2 '>13+</h3>
            <p className='text-[#8B8B8B]'>Years of experience</p>
        </li>
      
    </ul>
</div>
</div>
  </div>
</div> 
   </>
  );
};

export default HeroSection;