"use client"

import Image from 'next/image'
import vector from '../public/Vector.svg'
import SwitchTog from "@/components/SwitchTog";
import Qrcode from "@/public/QR-code.svg"

interface ToggleButtonProps {
  isQrMode: boolean;
  setIsQrMode: (checked: boolean) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isQrMode, setIsQrMode }) => {

  const handleToggle = (checked: boolean) => {
    console.log('Toggle state:', checked); // For debugging
    setIsQrMode(checked);
  };

  return (
    <div className="flex justify-center items-center mt-[3.5vw] md:mt-[4vw] lg:mt-[4rem]">
        <Image 
          src={vector} 
          alt='link Img' 
          width={24}
          height={24}
          className={`w-[21px] h-[21px] md:w-[21px] md:h-[21px] lg:w-[28px] lg:h-[28px] transition-opacity duration-300 mr-[1.75rem] md:mr-[1.75rem] lg:mr-[3.5rem] ${isQrMode ? 'opacity-30' : 'opacity-100'}`}
        />
        <SwitchTog onToggle={handleToggle}/>
        <Image 
          src={Qrcode} 
          alt='qr code Img' 
          width={24}
          height={24}
          className={`w-[21px] h-[21px] md:w-[21px] md:h-[21px] lg:w-[28px] lg:h-[28px] transition-all duration-300 ml-[1.75rem] md:ml-[1.75rem] lg:ml-[3.5rem] ${
            isQrMode 
              ? 'opacity-100 brightness-0 invert' 
              : 'opacity-30'
          }`}
        />
    </div>
  )
}

export default ToggleButton