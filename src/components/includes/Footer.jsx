import React from 'react'

const Footer = () => {
  return (
    <>
 
    <section class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
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



     <footer class="bg-black/40 border-t border-white/5 pt-20 pb-10 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div class="flex items-center gap-2 text-3xl font-bold italic">
              <span class="text-[#d4ff3d] text-4xl">✱</span> Noxfolio
            </div>
          </div>
          
          <div class="col-span-1">
            <h4 class="text-xl font-bold mb-6">Quick Link</h4>
            <div class="flex gap-4 text-gray-400 text-sm mb-8">
              <a href="#" class="hover:text-white transition">Service</a>
              <a href="#" class="hover:text-white transition">Projects</a>
              <a href="#" class="hover:text-white transition">Pricing</a>
              <a href="#" class="hover:text-white transition">Faqs</a>
              <a href="#" class="hover:text-white transition">Contact</a>
            </div>
            <div class="relative max-w-sm border-b border-white/20 pb-2 flex items-center">
              <span class="mr-2 text-gray-500">✉</span>
              <input type="email" placeholder="Email Address" class="bg-transparent outline-none w-full text-sm"/>
              <button class="bg-[#d4ff3d] text-black px-6 py-3 rounded-lg font-bold text-xs absolute -right-2 -top-4 hover:bg-white transition">Sign Up ›</button>
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

        <div class="border-t border-white/5 pt-10 flex flex-col md:row justify-between items-center gap-6">
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
    </>
  )
}

export default Footer