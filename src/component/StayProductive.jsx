import React from 'react'

function StayProductive() {
  return (
    <section className=' py-[80px] md:px-12'>
      <div className='container grid grid-cols-1 md:grid-cols-2 place-items-center gap-10'>
        <img src="/public/images/illustration-stay-productive.png" alt="pmg" />
        <div className='text-white font-normal tracking-[0.8px]'>
            <h3 className='font-medium md:leading-[50px] text-3xl md:text-4xl'>Stay productive. <br/>
            wherever you are</h3>
            <div className='text-[#ddd] text-sm my-[20px]'>
                 <p className='pb-4'> Stay productive wherever you are Stay productive wherever you are Stay productive wherever you are</p>
                 <p className='pb-4'> Stay productive wherever you are Stay productive wherever you are Stay productive wherever you are</p>
            </div>
             <a className='text-primary hover:text-[#42b0d1] transition-colors duration-200  flex items-center gap-[10px] pb-[4px] border-b-2 border-primary w-fit' href="/">See how Fylo works <img className="w-[20px] h-[20px] object-contain animate-move-right " src="/public/images/icon-arrow.svg" alt="" /></a>
        </div>
      </div>
    </section>
  )
}

export default StayProductive
