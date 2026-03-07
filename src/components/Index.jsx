import React from 'react'
import Navbar from './includes/Navbar'
import HeroSection from './HeroSection'
import { RiArrowGoForwardFill, RiArrowRightUpLine, RiAsterisk, RiCake2Line, RiCheckFill, RiCheckLine, RiEmpathizeFill, RiMailAddLine, RiPhoneFill, RiTicketFill } from '@remixicon/react'

const Index = () => {
  return (
    <>
<div className=' text-white h-screen'>
<Navbar/>


<HeroSection/>

<section className="mt-5 ">
    <div className='container bg-black mx-auto lg:flex-row flex-col-reverse p-10 flex justify-between   rounded-2xl'>
      <div className='w-full lg:w-6/12'>
          <span className='text-[#FFFFFF59] text-sm font-bold my-5 block'>About me</span>
        {/* <h1 className='text-white text-4xl mb-3 font-bold'>Digital Marketer</h1> */}
        <h3 className='text-white text-3xl mb-3 font-semibold mt-5'>Building brands and <span className='text-[#C9F31D]'>boosting engagement</span> in a digital world.</h3>
             <p className='text-[#FFFFFF59] mt-5 text-justify'>We denounce with righteous indignation dislike demoralized by the charms of pleasure We denounce with righteous indignation dislike demoralized by the charms of pleasure</p>
   
   <div>
   <div className='flex gap-10'>
     <ul className='mt-10'>
       <li className='flex items-center gap-2 mb-2'>
        
<span className='text-[#C9F31D]'>
<RiCheckLine></RiCheckLine>

</span>
<p className='text-white'>Branding & Design</p>
        </li> 
              <li className='flex items-center gap-2 mb-2'>
        
<span className='text-[#C9F31D]'>
<RiCheckLine></RiCheckLine>

</span>
<p className='text-white'>Branding & Design</p>
        </li> 
    </ul>
      <ul className='mt-10'>
       <li className='flex items-center gap-2 mb-2'>
        
<span className='text-[#C9F31D]'>
<RiCheckLine></RiCheckLine>

</span>
<p className='text-white'>Branding & Design</p>
        </li> 
              <li className='flex items-center gap-2 mb-2'>
        
<span className='text-[#C9F31D]'>
<RiCheckLine></RiCheckLine>

</span>
<p className='text-white'>Branding & Design</p>
        </li> 
    </ul>
   </div>
   
   <div className='bg-[#131313] p-7 mt-10 rounded-2xl border-2 border-[#383737]'>
<ul className='flex gap-10 lg:flex-row flex-col'>
    <li className='flex items-center gap-2 '>
       <div className='p-3 bg-[#C9F31D] border border-black rounded-full'>
        <RiMailAddLine className='text-md text-black '/>
       </div>
       <div>
        <span className='text-[#FFFFFF59] block'>Email</span>
        <span className='text-white font-semibold'>hasssan@gmail.com</span>
       </div>
    </li>
    <li className='flex items-center gap-2 '>
       <div className='p-3 bg-[#C9F31D] border border-black rounded-full'>
        <RiPhoneFill className='text-md text-black '/>
        
       </div>
       <div>
        <span className='text-[#FFFFFF59] block'>Phone</span>
        <span className='text-white font-semibold'>+8801791444444</span>
       </div>
    </li>
</ul>
   </div>
   </div>
      </div>
      <div className=''>
        <img src="https://wp.webtend.net/noxfolio/wp-content/uploads/2023/11/about.jpg" className='w-full rounded-[30px]' alt="" />
      </div>
      <div>
      </div>
    </div>
</section>
<section>
  <div className='container mx-auto flex mt-10 mb-10 lg:flex-row flex-col p-8'>
    <div className='p-20 hidden lg:block '>
      <span className='bg-[#131313] inline-block rounded-full border-2 border-[#383737] text-[#C9F31D]'>
   <RiAsterisk className='' size={100}/>
   </span>
    </div>
    <div className='w-full lg:w-9/12'>
         <span className='text-[#FFFFFF59] text-sm font-bold'>About me</span>
       <h3 className='text-white text-4xl font-semibold mt-5 mb-6 lg:w-5/12 w-full'>Real <span className=' text-[#C9F31D]'>Problem Solutions </span>Experience</h3>
<div className='bg-[#131313] mt-10 rounded-2xl border-2 border-[#383737] p-10 flex gap-10 flex-col lg:flex-row'>
<ul className='lg:w-6/12 w-full lg:border-r-2 lg:border-[#383737] lg:flex-row flex-col'>
  <li className='flex gap-5 p-4'>

       <span className=' text-[#C9F31D]'>
   <RiArrowRightUpLine className='bg-[#131313] inline-block rounded-full border-2 border-[#383737] p-1' size={30}/>
   </span>
    <div>
      <h2 className='text-md text-[#FFFFFF59] mb-2'>2021 - Present</h2>
      <p className='text-white font-semibold mb-2 text-2xl'>Lead Product Designer</p>
      <p className='text-md text-[#FFFFFF59] mb-2'>Google</p>
    </div>
  </li> 
   <li className='flex gap-5 p-4'>

       <span className=' text-[#C9F31D]'>
   <RiArrowRightUpLine className='bg-[#131313] inline-block rounded-full border-2 border-[#383737] p-1' size={30}/>
   </span>
    <div>
      <h2 className='text-md text-[#FFFFFF59] mb-2'>2021 - Present</h2>
      <p className='text-white font-semibold mb-2 text-2xl'>Lead Product Designer</p>
      <p className='text-md text-[#FFFFFF59] mb-2'>Google</p>
    </div>
  </li> 
   
</ul>
<ul className='lg:w-6/12 w-full lg:flex-row flex-col'>
  <li className='flex gap-5 p-4'>

       <span className=' text-[#C9F31D]'>
   <RiArrowRightUpLine className='bg-[#131313] inline-block rounded-full border-2 border-[#383737] p-1' size={30}/>
   </span>
    <div>
      <h2 className='text-md text-[#FFFFFF59] mb-2'>2021 - Present</h2>
      <p className='text-white font-semibold mb-2 text-2xl'>Lead Product Designer</p>
      <p className='text-md text-[#FFFFFF59] mb-2'>Google</p>
    </div>
  </li> 
   <li className='flex gap-5 p-4'>

       <span className=' text-[#C9F31D]'>
   <RiArrowRightUpLine className='bg-[#131313] inline-block rounded-full border-2 border-[#383737] p-1' size={30}/>
   </span>
    <div>
      <h2 className='text-md text-[#FFFFFF59] mb-2'>2021 - Present</h2>
      <p className='text-white font-semibold mb-2 text-2xl'>Lead Product Designer</p>
      <p className='text-md text-[#FFFFFF59] mb-2'>Google</p>
    </div>
  </li> 
   
</ul>
</div>
   </div>
  </div>
</section>
<section className='mt-10'>

<div className="container mx-auto mt-25">
  <div className='text-center'>
       <span className='text-[#FFFFFF59] text-sm font-bold'>Popular Services</span>
       <h2 className='text-white text-4xl/12 font-semibold mt-2 mb-6 w-5/12 mx-auto'>My  <span className='text-[#C9F31D]'>Special Service</span> For your Business Development</h2>
     </div>

     <div className='flex gap-0 lg:flex-row flex-col'>
<ul className=' lg:w-6/12 w-full py-5 gap-2 flex flex-col px-5  '>
   {/* <li className='flex overflow-hidden justify-center  gap-5 p-8 bg-[#1F1F1F] rounded-2xl hover:border-2 hover:border-[#C9F31D] transition hover:scale-105 duration-300'>
   
    <h2 className="text-6xl w-2/12 font-black text-transparent tracking-tighter" 
      style={{ WebkitTextStroke: '2px #b8d94b' }}>
    01
  </h2>
    <div className='w-8/12'>
      <h3>Brand Identity Design</h3>
      <p>Dignissimos ducimus blanditiis praesen</p>
    </div>  
   <span className=' text-[#C9F31D]'>
   <RiArrowRightUpLine className='bg-[#131313] inline-block rounded-full border-2 border-[#383737] p-1' size={30}/>
   </span>   
  </li> */}
  <li className="flex items-center overflow-hidden justify-between gap-6 p-8 bg-[#1F1F1F] rounded-2xl border-2 border-transparent hover:border-[#C9F31D] transition-all hover:scale-[1.02] duration-300 group">
  
  {/* 1. Number Section: shrink-0 se ye dabega nahi */}
  <h2 className="text-6xl font-black text-transparent tracking-tighter shrink-0" 
      style={{ WebkitTextStroke: '1px #b8d94b' }}>
    01
  </h2>

  {/* 2. Content Section: flex-1 se ye bachi hui puri jagah lega */}
  <div className="flex-1 min-w-0">
    <h3 className="text-xl font-bold text-white mb-1">Brand Identity Design</h3>
    <p className="text-gray-400 text-sm truncate">Dignissimos ducimus blanditiis praesen</p>
  </div>

  {/* 3. Icon Section */}
  <div className="shrink-0 text-[#C9F31D]">
    <RiArrowRightUpLine 
      className="bg-[#131313] rounded-full border-2 border-[#383737] p-1 group-hover:border-[#C9F31D] transition-colors" 
      size={40}
    />
  </div>
  
</li>
 <li className="flex items-center overflow-hidden justify-between gap-6 p-8 bg-[#1F1F1F] rounded-2xl border-2 border-transparent hover:border-[#C9F31D] transition-all hover:scale-[1.02] duration-300 group">
  
  {/* 1. Number Section: shrink-0 se ye dabega nahi */}
  <h2 className="text-6xl font-black text-transparent tracking-tighter shrink-0" 
      style={{ WebkitTextStroke: '1px #b8d94b' }}>
    02
  </h2>

  {/* 2. Content Section: flex-1 se ye bachi hui puri jagah lega */}
  <div className="flex-1 min-w-0">
    <h3 className="text-xl font-bold text-white mb-1">Brand Identity Design</h3>
    <p className="text-gray-400 text-sm truncate">Dignissimos ducimus blanditiis praesen</p>
  </div>

  {/* 3. Icon Section */}
  <div className="shrink-0 text-[#C9F31D]">
    <RiArrowRightUpLine 
      className="bg-[#131313] rounded-full border-2 border-[#383737] p-1 group-hover:border-[#C9F31D] transition-colors" 
      size={40}
    />
  </div>
  
</li>
<li className="flex items-center overflow-hidden justify-between gap-6 p-8 bg-[#1F1F1F] rounded-2xl border-2 border-transparent hover:border-[#C9F31D] transition-all hover:scale-[1.02] duration-300 group">
  
  {/* 1. Number Section: shrink-0 se ye dabega nahi */}
  <h2 className="text-6xl font-black text-transparent tracking-tighter shrink-0" 
      style={{ WebkitTextStroke: '1px #b8d94b' }}>
    03
  </h2>

  {/* 2. Content Section: flex-1 se ye bachi hui puri jagah lega */}
  <div className="flex-1 min-w-0">
    <h3 className="text-xl font-bold text-white mb-1">Brand Identity Design</h3>
    <p className="text-gray-400 text-sm truncate">Dignissimos ducimus blanditiis praesen</p>
  </div>

  {/* 3. Icon Section */}
  <div className="shrink-0 text-[#C9F31D]">
    <RiArrowRightUpLine 
      className="bg-[#131313] rounded-full border-2 border-[#383737] p-1 group-hover:border-[#C9F31D] transition-colors" 
      size={40}
    />
  </div>
  
</li>

  </ul >
<ul className=' lg:w-6/12 w-full  lg:py-5 gap-2 flex flex-col px-5 '>
<li className="flex items-center overflow-hidden justify-between gap-6 p-8 bg-[#1F1F1F] rounded-2xl border-2 border-transparent hover:border-[#C9F31D] transition-all hover:scale-[1.02] duration-300 group">
  
  {/* 1. Number Section: shrink-0 se ye dabega nahi */}
  <h2 className="text-6xl font-black text-transparent tracking-tighter shrink-0" 
      style={{ WebkitTextStroke: '1px #b8d94b' }}>
    04
  </h2>

  {/* 2. Content Section: flex-1 se ye bachi hui puri jagah lega */}
  <div className="flex-1 min-w-0">
    <h3 className="text-xl font-bold text-white mb-1">Brand Identity Design</h3>
    <p className="text-gray-400 text-sm truncate">Dignissimos ducimus blanditiis praesen</p>
  </div>

  {/* 3. Icon Section */}
  <div className="shrink-0 text-[#C9F31D]">
    <RiArrowRightUpLine 
      className="bg-[#131313] rounded-full border-2 border-[#383737] p-1 group-hover:border-[#C9F31D] transition-colors" 
      size={40}
    />
  </div>
  
</li>
 <li className="flex items-center overflow-hidden justify-between gap-6 p-8 bg-[#1F1F1F] rounded-2xl border-2 border-transparent hover:border-[#C9F31D] transition-all hover:scale-[1.02] duration-300 group">
  
  {/* 1. Number Section: shrink-0 se ye dabega nahi */}
  <h2 className="text-6xl font-black text-transparent tracking-tighter shrink-0" 
      style={{ WebkitTextStroke: '1px #b8d94b' }}>
    05
  </h2>

  {/* 2. Content Section: flex-1 se ye bachi hui puri jagah lega */}
  <div className="flex-1 min-w-0">
    <h3 className="text-xl font-bold text-white mb-1">Brand Identity Design</h3>
    <p className="text-gray-400 text-sm truncate">Dignissimos ducimus blanditiis praesen</p>
  </div>

  {/* 3. Icon Section */}
  <div className="shrink-0 text-[#C9F31D]">
    <RiArrowRightUpLine 
      className="bg-[#131313] rounded-full border-2 border-[#383737] p-1 group-hover:border-[#C9F31D] transition-colors" 
      size={40}
    />
  </div>
  
</li>
<li className="flex items-center overflow-hidden justify-between gap-6 p-8 bg-[#1F1F1F] rounded-2xl border-2 border-transparent hover:border-[#C9F31D] transition-all hover:scale-[1.02] duration-300 group">
  
  {/* 1. Number Section: shrink-0 se ye dabega nahi */}
  <h2 className="text-6xl font-black text-transparent tracking-tighter shrink-0" 
      style={{ WebkitTextStroke: '1px #b8d94b' }}>
    06
  </h2>

  {/* 2. Content Section: flex-1 se ye bachi hui puri jagah lega */}
  <div className="flex-1 min-w-0">
    <h3 className="text-xl font-bold text-white mb-1">Brand Identity Design</h3>
    <p className="text-gray-400 text-sm truncate">Dignissimos ducimus blanditiis praesen</p>
  </div>

  {/* 3. Icon Section */}
  <div className="shrink-0 text-[#C9F31D]">
    <RiArrowRightUpLine 
      className="bg-[#131313] rounded-full border-2 border-[#383737] p-1 group-hover:border-[#C9F31D] transition-colors" 
      size={40}
    />
  </div>
  
</li>
  </ul >

</div>
</div>

</section>

<section className="mt-15   bg-[radial-gradient(circle_at_center,_#111111_0%,_#0a0a0a_100%)] ">
  <div className="container mx-auto flex  py-0 lg:px-10 lg:flex-row flex-col">
    <div className="lg:w-6/12 w-full lg:py-40 lg:px-10 p-8 ">
 <span className='text-[#FFFFFF59] text-sm font-bold'>My Skill</span>
 <h4 className='text-white text-3xl font-bold mt-3'>Let’s Explore Popular <span className='text-[#C9F31D]'>  Skills & Experience</span></h4>
 <p className='text-[#FFFFFF59] text-md my-6'>
 ped ut perspiciatis unde omnis iste natus to voluptatem accusantium doloremque laudantium, totam rem aperiamc eaque ipsa quae ab illo inventore veritatis
</p>  

 <button className="group relative inline-block px-10 py-4 overflow-hidden rounded-md border border-[#C9F31D] font-bold text-black bg-[#C9F31D] transition-all duration-300 ease-in-out hover:text-white mt-5 hover:shadow-lg  shadow-[#070707]">
  

  <span className="absolute left-1/2 top-full h-[180%] w-[140%] -translate-x-1/2 rounded-[50%] bg-black/5 transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] group-hover:-top-[35%] group-hover:scale-x-[0.8] group-hover:scale-y-[1.3] z-0"></span>

  <span className="absolute left-[55%] top-[180%] h-[190%] w-[160%] -translate-x-1/2 rounded-[50%] bg-black transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] group-hover:-top-[45%] group-hover:scale-x-[0.8] group-hover:scale-y-[1.3] z-0"></span>


  <span className="relative z-10">View All</span>
</button>
 </div>
    <div className="lg:py-20 p-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 ">
      
      <div className="bg-[#161616] p-6 rounded-2xl flex flex-col items-center border border-gray-800 hover:border-[#d4ff3d] transition">
        <img src="https://cdn.worldvectorlogo.com/logos/figma-1.svg" className="w-12 h-12 mb-4" alt="Figma"/>
        <span className="text-gray-300 mb-4 font-medium">Figma</span>
        <div className="bg-[#1f1f1f] w-full py-2 rounded-lg text-center text-gray-500 font-bold">95%</div>
      </div>

      <div class="bg-[#161616] p-6 rounded-2xl flex flex-col items-center border border-gray-800 hover:border-[#d4ff3d] transition">
        <img src="https://cdn.worldvectorlogo.com/logos/framer-2.svg" class="w-12 h-12 mb-4" alt="Framer"/>
        <span class="text-gray-300 mb-4 font-medium">Framer</span>
        <div class="bg-[#1f1f1f] w-full py-2 rounded-lg text-center text-gray-500 font-bold">83%</div>
      </div>

      <div class="bg-[#161616] p-6 rounded-2xl flex flex-col items-center border border-gray-800 hover:border-[#d4ff3d] transition">
        <img src="https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" class="w-12 h-12 mb-4" alt="Photoshop"/>
        <span class="text-gray-300 mb-4 font-medium">Photoshop</span>
        <div class="bg-[#1f1f1f] w-full py-2 rounded-lg text-center text-gray-500 font-bold">93%</div>
      </div>
  <div class="bg-[#161616] p-6 rounded-2xl flex flex-col items-center border border-gray-800 hover:border-[#d4ff3d] transition">
        <img src="https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" class="w-12 h-12 mb-4" alt="Photoshop"/>
        <span class="text-gray-300 mb-4 font-medium">Photoshop</span>
        <div class="bg-[#1f1f1f] w-full py-2 rounded-lg text-center text-gray-500 font-bold">93%</div>
      </div>  <div class="bg-[#161616] p-6 rounded-2xl flex flex-col items-center border border-gray-800 hover:border-[#d4ff3d] transition">
        <img src="https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" class="w-12 h-12 mb-4" alt="Photoshop"/>
        <span class="text-gray-300 mb-4 font-medium">Photoshop</span>
        <div class="bg-[#1f1f1f] w-full py-2 rounded-lg text-center text-gray-500 font-bold">93%</div>
      </div>
      <div class="bg-[#161616] p-6 rounded-2xl flex flex-col items-center border border-gray-800 hover:border-[#d4ff3d] transition">
        <img src="https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" class="w-12 h-12 mb-4" alt="WordPress"/>
        <span class="text-gray-300 mb-4 font-medium">WordPress</span>
        <div class="bg-[#1f1f1f] w-full py-2 rounded-lg text-center text-gray-500 font-bold">84%</div>
      </div>

      <div class="bg-[#161616] p-6 rounded-2xl flex flex-col items-center border border-gray-800 hover:border-[#d4ff3d] transition">
        <img src="https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg" class="w-12 h-12 mb-4" alt="Angular"/>
        <span class="text-gray-300 mb-4 font-medium">Angular</span>
        <div class="bg-[#1f1f1f] w-full py-2 rounded-lg text-center text-gray-500 font-bold">65%</div>
      </div>

      <div class="bg-[#161616] p-6 rounded-2xl flex flex-col items-center border border-gray-800 hover:border-[#d4ff3d] transition">
        <img src="https://cdn.worldvectorlogo.com/logos/webflow.svg" class="w-12 h-12 mb-4" alt="Webflow"/>
        <span class="text-gray-300 mb-4 font-medium">Webflow</span>
        <div class="bg-[#1f1f1f] w-full py-2 rounded-lg text-center text-gray-500 font-bold">86%</div>
      </div>

      <div class="bg-[#161616] p-6 rounded-2xl flex flex-col items-center border border-gray-800 hover:border-[#d4ff3d] transition">
        <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" class="w-12 h-12 mb-4" alt="Python"/>
        <span class="text-gray-300 mb-4 font-medium">Python</span>
        <div class="bg-[#1f1f1f] w-full py-2 rounded-lg text-center text-gray-500 font-bold">62%</div>
      </div>

      <div class="bg-[#161616] p-6 rounded-2xl flex flex-col items-center border border-gray-800 hover:border-[#d4ff3d] transition">
        <img src="https://cdn.worldvectorlogo.com/logos/sketch-2.svg" class="w-12 h-12 mb-4" alt="Sketch"/>
        <span class="text-gray-300 mb-4 font-medium">Sketch</span>
        <div class="bg-[#1f1f1f] w-full py-2 rounded-lg text-center text-gray-500 font-bold">94%</div>
      </div>

    </div> 
    </div>


  </div>
</section>

  <section className="max-w-7xl lg:mt-30  mt-10 p-8 mx-auto grid lg:grid-cols-2 gap-1  ">
      <div>
        <span class="text-gray-500 font-medium block mb-2">Get In Touch</span>
        <h2 class="text-5xl font-bold leading-tight mb-6">
          Let’s Talk For your <br/>
          <span class="text-[#d4ff3d]">Next Projects</span>
        </h2>
        <p class="text-gray-400 mb-10">Sed ut perspiciatis unde omnis natus totam rem aperiam eaque inventore veritatis.</p>
        
        <ul class="space-y-6">
          <li class="flex items-center gap-4">
            <span class="bg-[#d4ff3d] text-black rounded-full p-1 text-xs">✔</span>
            <span class="text-gray-300">5+ Years Of Experience</span>
          </li>
          <li class="flex items-center gap-4">
            <span class="bg-[#d4ff3d] text-black rounded-full p-1 text-xs">✔</span>
            <span class="text-gray-300">Professional Web Designer</span>
          </li>
          <li class="flex items-center gap-4">
            <span class="bg-[#d4ff3d] text-black rounded-full p-1 text-xs">✔</span>
            <span class="text-gray-300">Mobile Apps Design</span>
          </li>
        </ul>
      </div>

      <form class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm mb-2">Full Name <span class="text-[#d4ff3d]">*</span></label>
            <input type="text" placeholder="Richard D. Hammond" class="w-full bg-[#111111] border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-[#d4ff3d]/50 text-gray-400"/>
          </div>
          <div>
            <label class="block text-sm mb-2">Email Address <span class="text-[#d4ff3d]">*</span></label>
            <input type="email" placeholder="support@gmail.com" class="w-full bg-[#111111] border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-[#d4ff3d]/50 text-gray-400"/>
          </div>
        </div>

        <div>
          <label class="block text-sm mb-2">Textarea <span class="text-[#d4ff3d]">*</span></label>
          <textarea rows="5" placeholder="Write message" class="w-full bg-[#111111] border border-white/5 rounded-xl px-5 py-4 focus:outline-none focus:border-[#d4ff3d]/50 text-gray-400"></textarea>
        </div>

        <button class="bg-[#d4ff3d] text-black font-bold py-4 px-10 rounded-2xl transition hover:opacity-90">
          Send Us Message ›
        </button>
      </form>
    </section>
{/* <section className='bg-red-800'> 
  <div className='triangle'>
    <img src="data:image/jpeg;base64,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" alt="" />
  </div>
  <div className="wavy-circle">
    
  </div>
</section> */}

   <footer class=" bg-[radial-gradient(circle_at_center,_#111111_0%,_#0a0a0a_100%)] border-t mt-10 border-white/5 pt-20 pb-10 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div class="flex items-center gap-2 text-3xl font-bold italic">
              <span class="text-[#d4ff3d] text-4xl">✱</span> Noxfolio
            </div>
          </div>
          
          <div class="col-span-1">
            <h4 class="text-xl font-bold mb-6">Quick Link</h4>
            <div class="flex gap-4 text-gray-400 text-sm mb-8 flex-col">
              <a href="#" class="hover:text-white transition">Service</a>
              <a href="#" class="hover:text-white transition">Projects</a>
              <a href="#" class="hover:text-white transition">Pricing</a>
              <a href="#" class="hover:text-white transition">Faqs</a>
              <a href="#" class="hover:text-white transition">Contact</a>
            </div>
      
          </div>

          <div class="space-y-4">
            <h4 class="text-xl font-bold mb-6">Address</h4>
            <div class="flex gap-4 items-start text-gray-400">
              <span class="text-[#d4ff3d]">📍</span>
              <p>55 Main Street, 2nd block, <br/> New York City</p>
            </div>
            <div class="flex gap-4 items-center text-gray-400">
              <span class="text-[#d4ff3d]">✉</span>
              <p>support@gmail.com</p>
            </div>
            <div class="flex gap-4 items-center text-gray-400">
              <span class="text-[#d4ff3d]">📞</span>
              <p>+880 (123) 456 88</p>
            </div>
          </div>
        </div>

        <div class="border-t border-white/5 pt-5 flex flex-row md:row justify-between items-center gap-6">
          <p class="text-gray-500 text-sm">Copyright @2026, <span class="text-white">Noxfolio</span> All Rights Reserved</p>
          <div class="flex gap-8 text-gray-400 text-sm">
            <a href="#" class="hover:text-white transition">Facebook</a>
            <a href="#" class="hover:text-white transition">Twitter</a>
            <a href="#" class="hover:text-white transition">Instagram</a>
            <a href="#" class="hover:text-white transition">Linkedin</a>
          </div>
        </div>
      </div>
    </footer>

  </div>

    </>
  )
}

export default Index