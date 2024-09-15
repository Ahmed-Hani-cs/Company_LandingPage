import React from 'react'

function Testimonials() {
    return (
        <section className='pt-10 pb-[100px]'>
            <div className='container'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 place-items-center relative'>
                    <div className=" bg-[#21293c] shadow-lg shadow-slate-700 p-6  h-[200px] z-[5] rounded-sm text-white  h-fit sm:pb-8">
                        <p className=' font-normal font-medium text-md text-[#ddd] opacity-80'>Fylo has improved our team productivity byan order Of magnitude. Since making theswitch our team has become a well-oiledcollaboration machine.</p>
                        <div className='flex gap-4 items-center mt-8 h-fit'>
                            <img className='w-[40px] h-[40px] rounded-full' src="/public/images/profile-1.jpg" alt="userImg" />
                            <div className=' leading-5'>
                                <h5 className=' font-bold tracking-wide'>Ahemd Hani</h5>
                                <p className='text-sm text-[#ddd] opacity-80'>Founder& CEO, Owner</p>
                            </div>
                        </div>

                    </div>
                    <div className=" bg-[#21293c] shadow-lg shadow-slate-700 p-6  h-[200px] rounded-sm text-white  h-fit sm:pb-8">
                        <p className=' font-normal font-medium text-md text-[#ddd] opacity-80'>Fylo has improved our team productivity byan order Of magnitude. Since making theswitch our team has become a well-oiledcollaboration machine.</p>
                        <div className='flex gap-4 items-center mt-8 h-fit'>
                            <img className='w-[40px] h-[40px] rounded-full' src="/public/images/profile-3.jpg" alt="userImg" />
                            <div className=' leading-5'>
                                <h5 className=' font-bold tracking-wide'>Ahemd Hani</h5>
                                <p className='text-sm text-[#ddd] opacity-80'>Founder& CEO, Owner</p>
                            </div>
                        </div>

                    </div>
                    <div className=" bg-[#21293c] shadow-lg shadow-slate-700 p-6  h-[200px] rounded-sm text-white  h-fit sm:pb-8">
                        <p className=' font-normal font-medium text-md text-[#ddd] opacity-80'>Fylo has improved our team productivity byan order Of magnitude. Since making theswitch our team has become a well-oiledcollaboration machine.</p>
                        <div className='flex gap-4 items-center mt-8 h-fit'>
                            <img className='w-[40px] h-[40px] rounded-full' src="/public/images/profile-2.jpg" alt="userImg" />
                            <div className=' leading-5'>
                                <h5 className=' font-bold tracking-wide'>Ahemd Hani</h5>
                                <p className='text-sm text-[#ddd] opacity-80'>Founder& CEO, Owner</p>
                            </div>
                        </div>

                    </div>
                    <img src="/public/images/bg-quotes.png" className=' absolute top-[-30px] left-[-20px] z-[0]'  />
                </div>
            </div>
        </section>
    )
}

export default Testimonials
