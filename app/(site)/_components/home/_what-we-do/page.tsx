import Image from 'next/image'
import React from 'react'
import whatWeDo from "@/public/assets/client/document-illustrate.svg"

const WhatWeDo = () => {
  return (
    <div className='max-w-[960px] mx-auto px-4 py-10'>
      <div className='flex flex-col gap-4 border border-[#8C52FF] p-2 rounded-4xl'>
        <div className='flex flex-col md:flex-row gap-2 rounded-4xl bg-gradient-to-br from-[rgba(140,82,255,0.15)] to-[rgba(255,145,77,0.15)]'>
          <div className='flex flex-col justify-center gap-2 px-12 pt-12 md:pt-0'>
            <h3 className='text-2xl md:text-xl lg:text-3xl font-semibold text-[#0F4487]'>What We Do?</h3>
            <p className='text-sm lg:text-base text-[#4A4C56]'>In today's fast-paced world, manual document review is time-consuming, error-prone, and resource-intensive. Trust Scan changes the game with its powerful Document Analysis Engine, designed to streamline and automate compliance checks with precision and ease.</p>
          </div>
          <div>
            <Image src={whatWeDo} width={2000} height={2000} alt="what-we-do" className=' rounded-4xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo