import React, { useEffect, useRef, useState } from 'react'

function Header() {
    const [links , setLinks] = useState(['feature' , "teams" , 'login']);
    const headerRef = useRef('')
    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 100) {
                headerRef.current.style.background= "#0c1524";
                headerRef.current.style.padding = "20px 0";
            } else {
                headerRef.current.style.paddingTop = "4rem";
                headerRef.current.style.background= "transparent";
              }   
        }
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[])
    return (
    <header className=' pt-16 fixed top-0 left-0 w-full z-50 transition-all duration-200' ref={headerRef}>
        <div className='container  flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row '>
            <a href="/">
                <img src="/public/images/logo.svg" alt="logo" />
            </a>
            <nav>
            <ul className='flex items-center gap-3'>
                {links.map((ele,i)=>{
                    return <li key={i} className=' font-bold text-lg text-white opacity-80 hover:opacity-100 hover:underline'><a href={`/${ele}`}>{ele}</a></li>
                })}
            </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
