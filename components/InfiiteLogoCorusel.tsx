import React from 'react'
import Image from 'next/image'
import airbnb from '../public/airbnb.svg'
import atandt from '../public/atandt.svg'
import facebook from '../public/Facebook.svg'
import google from '../public/google.svg'
import pbs from '../public/PBS.svg'
import rotring from '../public/Rotring.svg'
import spar from '../public/spar.svg'
import spotify from '../public/Spotify.svg'
import xerox from '../public/Xerox.svg'
import yonex from '../public/Yonex.svg'

const InfiiteLogoCorusel = () => {
  const logos = [airbnb, facebook, google, pbs, rotring, atandt, spar, spotify, xerox, yonex];

  return (
    <div className="relative w-[90vw] mx-[5vw] overflow-hidden mt-16">
      {/* Left fade gradient */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#080A0C] to-transparent z-10"></div>

      <div className="inline-flex animate-scroll-left">
        {[1,2,3].map((set) => (
          <div key={set} className="flex items-center whitespace-nowrap">
            {logos.map((logo, index) => (
              <div 
                key={`${set}-${index}`} 
                className="w-[112px] h-[45px] flex items-center justify-center mx-6"
              >
                <Image
                  src={logo}
                  alt="company logo"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Right fade gradient */}
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#080A0C] to-transparent z-10"></div>
    </div>
  )
}

export default InfiiteLogoCorusel