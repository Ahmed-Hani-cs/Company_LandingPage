import React, { useState } from 'react'
import FeaturesBox from './FeaturesBox'


function Features() {
    const [items , setItems] = useState([
        {icon: "icon-access-anywhere.svg" , title: "Access your files, anywhere" , disc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow youeverywhere."},
        {icon: "icon-security.svg" , title: "Security you can trust" , disc:"2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."},
        {icon: "icon-collaboration.svg" , title: "Real-time collaboration" , disc:"Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."},
        {icon: "icon-any-file.svg" , title: "Store any type of file" , disc:"Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."},
    ])
return (
    <section>
    <div className='container'>
            <div className='grid w-full grid-cols-1 sm:grid-cols-2 xl:w-[865px] mx-auto my-12 gap-[30px]'>
            {items.map((ele,i)=>{
                return <FeaturesBox key={i} itemData={ele} />
            })}
            </div>
    </div>

    </section>
  )
}

export default Features
