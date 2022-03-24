import React, { useState } from 'react'
import {BsSunFill} from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import {HiOutlineMenu} from 'react-icons/hi';
import {MdOutlineClose} from 'react-icons/md';
import useDarkMode from '../../useDarkMode';
const Navbar = ({isMobile}) => {
    const[isOpenMenu, setIsOpenMenu]= useState(false);
    const[isDarkMode, toggleDarkMode] = useDarkMode();
    const handleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    }
  return (
    <nav className="flex items-center">
        <div className="flex items-center">
            <div className="text-20 font-bold mr-2">NerdCard</div>
            {isDarkMode ? (<BsSunFill size={"24px"} color="#e9c46a" className="cursor-pointer" onClick={toggleDarkMode}/>) : (<FaMoon size={"24px"} color="#e9c46a" className="cursor-pointer" onClick={toggleDarkMode}/>)}
        </div>
        <ul className="md:flex md:gap-10 items-center  ml-auto text-16 font-semibold">
            {isOpenMenu && isMobile ? (<MdOutlineClose size={"24px"}className="cursor-pointer" onClick={handleMenu}/>):!isOpenMenu && isMobile ?(<HiOutlineMenu className="cursor-pointer" size={"24px"} onClick={handleMenu} />): (
                <>
                    <li className="btn-hover">Features</li>
                    <li className="btn-hover">Menu</li>
                    <li className="btn-hover">Our Story</li>
                    <li className="btn-hover ml-28">Contact</li>
                </>
            )}
            {isOpenMenu && (
                <div className="absolute right-8 bg-white p-8 text-center text-13 text-black z-10">
                    <li>Features</li>
                    <li>Menu</li>
                    <li>Our Story</li>
                    <li>Contact</li>
                </div>
            )}
        </ul>
    </nav>
  )
}

export default Navbar