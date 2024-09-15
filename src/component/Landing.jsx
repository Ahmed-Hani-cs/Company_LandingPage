import React, { Fragment } from 'react'

function Landing() {
    return (
        <div className='bg-[#1c2230] pt-[50px] overflow-hidden'>
            <div className='container' >
                <div className=' ele-center flex-col gap-10 pt-[160px]'>
                    <div className='  lg:w-[650px] max-w-[100%] mx-auto  ' >
                        <img className=' w-full h-fit' src="/public/images/illustration-intro.png" alt="landing photo" />
                    </div>
                    <div className='text-white text-center'>
                        <h1 className=' font-semibold text-xl sm:text-3xl lg:text-4xl'>ALL your files in one secure location,<br /> accessible anywhere.</h1>
                        <p className='text-xs w-[75%]  sm:text-base sm:w-[600px] lg:w-[600px] mx-auto mt-4 mb-8'>Fylo stores all your most important files in one secure location.
                            Access them wherever you need, share and collaborate with
                            friends family, and co-workers.
                        </p>
                        <a className='btn-main-sky px-12 py-2 '>Get Started</a>
                    </div>

                </div>
            </div>
            <div className=' w-full h-[200px] relative'>
                <img src="/public/images/bg-curvy-desktop.svg" className='w-full h-fit absolute bottom-[-30px] sm:relative' alt="img" />
            </div>
        </div>
    )
}

export default Landing
