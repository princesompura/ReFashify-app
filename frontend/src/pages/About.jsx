import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about1} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>The fashion industry is one of the largest contributors to environmental degradation, driven by the rapid turnover of trends and the rise of fast fashion. This results in massive amounts of waste, excessive resource consumption, and a significant carbon footprint. Consumers often purchase clothing that is worn only a few times before being discarded, exacerbating the problem.</p>
              <p>Whether you're looking to reduce your fashion footprint or discover one-of-a-kind upcycled designs, Refashify is your go-to platform for sustainable fashion. Together, we can build a fashion industry that works for the planet, not against it.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>We envision a world where fashion is sustainable, accessible, and creative. Refashify strives to be at the forefront of this movement, providing tools and a platform to help both consumers and designers make a positive environmental impact.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>we ensure every product meets high-quality standards. Each clothing item is thoroughly inspected for durability, cleanliness, and style, so our users enjoy a flawless fashion experience every time they rent or buy.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>Our platform is designed with user convenience in mind. With easy-to-use filters, a streamlined rental process, and quick access to upcycled fashion, Refashify makes sustainable fashion choices effortless for all.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>We prioritize our customers with responsive, friendly support at every step. Whether it’s helping with rentals, returns, or designer collaborations, our team is dedicated to providing an exceptional experience and ensuring satisfaction.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
