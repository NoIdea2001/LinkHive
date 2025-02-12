import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface FeatureCardProps {
  image: StaticImageData
  title: string
  description: string
}

const FeatureCard = ({ image, title, description }: FeatureCardProps) => {
  return (
    <div className="relative w-[334px] h-[475px]">
      <div className="absolute inset-0 rounded-[19px] p-[1.7px]">
        <div className="absolute inset-0 rounded-[19px] bg-gradient-to-b from-[#999898] to-[#454545]"></div>
        <div className="absolute inset-0 rounded-[19px] bg-[#080A0C]" style={{ margin: '1px' }}></div>
      </div>
      <div className="relative h-full flex flex-col items-start text-left p-7 rounded-[19px] bg-[#D9D9D9]/5">
        <div className="relative w-[285px] h-[285px] mb-5">
          <div className="absolute inset-0 rounded-[10px] p-[1px]">
            <div className="absolute inset-0 rounded-[10px] bg-gradient-to-br from-white/40 to-transparent"></div>
            <div className="absolute inset-0 rounded-[10px] bg-[#080A0C]" style={{ margin: '1px' }}></div>
          </div>
          <div className="relative h-full flex items-center justify-center rounded-[10px] bg-[#D9D9D9]/5">
            <div className="w-[127px] h-[127px]">
              <Image 
                src={image} 
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <h3 className="text-white text-[22px] font-semibold mb-3">
          {title}
        </h3>
        <p className="text-gray-300 text-[15px] font-light">
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeatureCard