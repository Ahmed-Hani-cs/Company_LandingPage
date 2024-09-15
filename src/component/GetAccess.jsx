import React from 'react'

function GetAccess() {
  return (
    <section>
        <div className='container relative relative min-h-[300px]'>
            <div className=' shadow-lg bg-inherit bg-[#181e2a] shadow-black max-w-[860px] z-30 p-[40px] rounded-[10px] absolute left-[50%] translate-x-[-50%] bottom-[-50px] ele-center flex-col '>
                <h2 className=' text-xl lg:text-3xl text-white font-medium mb-[10px]  '>Get early access today</h2>
                <p className='text-sm pb-[20px] text-center text-[#ddd] '>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
                questions. our support team would be happy to help you.</p>
                <form className='flex w-full gap-3 flex-wrap'>
                    <input type="email" className=' h-[50px] flex-1 rounded-3xl' />
                    <button className='btn-main-sky h-[50px] flex-1 lg:flex-none lg:w-[150px] '>Get Started For Free</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default GetAccess
