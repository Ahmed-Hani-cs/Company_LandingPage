import React from 'react'

function FeaturesBox({itemData}) {
    const {icon , title , disc} = itemData;
return (
    <div className='text-center ele-center flex-col gap-4 p-4'>
        <img src={`/public/images/${icon}`} alt="icon" className='w-[80px] h-[80px] object-contain' />
        <div className='text-white'>
            <h3 className='text-xl font-bold mb-1'>{title}</h3>
            <p className='font-normal text-sm'>{disc}</p>
        </div>
    </div>
  )
}

export default FeaturesBox
