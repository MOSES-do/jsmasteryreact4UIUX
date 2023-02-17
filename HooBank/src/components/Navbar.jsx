import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className="w-full flex py-6 justify-between items-center">
            <img src={logo} alt="Hoobank Navbar logo" className="w-[124px] [h-32px]" />

            <ul className='list-none z-10 sm:flex hidden justify-end items-center flex-1' >
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`font-poppins font-normal cursor-pointer text=[16px]  ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white `}>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>

            {/* small screen */}
            <div className='sm:hidden  z-[999]  flex flex-1 justify-end items-center'>
                <img onClick={() => setToggle(prevState => !prevState)} src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none  flex flex-col justify-end items-center flex-1' >
                        {navLinks.map((nav, index) => (
                            <li onClick={() => setToggle(prev => !prev)} key={nav.id} className={`font-poppins font-normal cursor-pointer text=[16px]  ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white `}>
                                <a className="" href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar