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
    <div className="flex justify-center items-center mt-[4.5rem]">
        <Image 
          src={vector} 
          alt='link Img' 
          className={`transition-opacity duration-300 mr-[3.5rem] ${isQrMode ? 'opacity-30' : 'opacity-100'}`}
        />
        <SwitchTog onToggle={handleToggle}/>
        <Image 
          src={Qrcode} 
          alt='qr code Img' 
          className={`transition-all duration-300 ml-[3.5rem] ${
            isQrMode 
              ? 'opacity-100 brightness-0 invert' 
              : 'opacity-30'
          }`}
        />
    </div>
  )
}

export default ToggleButton