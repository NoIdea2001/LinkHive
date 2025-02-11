import React from 'react'
import InfiiteLogoCorusel from './InfiiteLogoCorusel'

const TrustLine = () => {
  return (
    <div className="relative z-20 text-center mt-[110px]">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-[30px]">
        Trusted by Industry Leaders<br />
        Worldwide
      </h1>
      <p className="text-[17.5px] text-gray-300 max-w-3xl mx-auto px-4 font-light">
        From global enterprises to growing startups, businesses across industries rely on LinkHive for smarter, faster, and secure link sharing
      </p>
      <InfiiteLogoCorusel/>
    </div>
  )
}

export default TrustLine