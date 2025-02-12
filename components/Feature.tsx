import React from 'react'
import lock from '@/public/Lock Illustration.svg'
import clock from '@/public/Group.svg'
import dasboard from '@/public/Group 25.svg'
import folder from '@/public/Folder.svg'
import arrow from '@/public/Arrow.svg'
import QRfeature from '@/public/QRfeature.svg'
import FeatureCard from './featureCard'
const Feature = () => {
    const features = [
        {
            image: lock,
            title: 'Custom Slugs & Security',
            description: 'Personalize links with custom slugs to enhance branding and recognition. Add password protection to ensure secure sharing with your intended audience. Make every link professional and secure.'
        },
        {
            image: clock,
            title: 'Link Expiration Timers',
            description: 'Set expiration timers to control how long your links remain active. Perfect for campaigns, events, or time-sensitive sharing. Say goodbye to outdated or irrelevant links.'
        },
        {
            image: dasboard,
            title: 'Analytics Dashboard',
            description: 'Track clicks, locations, and devices with an intuitive analytics dashboard. Gain insights to refine strategies and understand your audience better. Make data-driven decisions effortlessly.'
        },
        {
            image: folder,
            title: 'Bulk Link Management',
            description: 'Simplify your workflow with bulk shortening and management tools, perfect for handling large campaigns or multiple projects. Customize, organize, and track numerous links all at once, saving you time and effort while maximizing efficiency.'
        },
        {
            image: QRfeature,
            title: 'Custom QR Codes',
            description: 'Enhance your QR codes with a personalized touch by choosing custom colors that match your branding or style. LinkHive makes it simple to create visually appealing QR codes without any pre-set templates, giving you full creative control.'
        },      
        {
            image: arrow,
            title: 'Quick & Advanced Mode',
            description: 'Quickly shorten a URL or generate a QR code without login in Quick Mode. Advanced features like bulk shortening and customization require an account and are accessible through the Dashboard. Toggle seamlessly to meet your needs.'
        }  
    ]
  return (
    <div className='mt-[100px] flex flex-col items-center'>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-[30px] text-center">
          Why Choose LinkHive?
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1300px] px-4 place-items-center mt-16'>
            {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
            ))}
        </div>
    </div>
  )
}

export default Feature