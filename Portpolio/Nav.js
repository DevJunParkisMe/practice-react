import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
const Nav = () => {
    const [isNavVisible, setNavVisible] = useState(false);

    const toggleNav = () => {
        console.log('Toggle Nav Clicked');
        setNavVisible(!isNavVisible);
    };
  return (
    <>
        {isNavVisible ? <IoMdClose className='text-4xl fixed m-6 text-white z-30 cursor-pointer' onClick={toggleNav}/> :
        <IoMdMenu className={`text-4xl fixed m-6 text-white z-30 cursor-pointer`} onClick={toggleNav}/>}
        <nav className={`lg:flex bg-opacity-100 text-white fixed w-full justify-center z-20`}>
            <div className='flex'>
            <ul className={`text-white ${isNavVisible ? '' : 'hidden'}`}>
                <li><li><a href="/#1" className="p-0 mx-10 font-['Orbit-Regular'] tracking-wide transition ease-in-out delay-25 hover:scale-125 hover:font-bold duration-150">Home</a></li></li>
            </ul>
            <ul className={`text-white ${isNavVisible ? '' : 'hidden'}`}>
                <li><a href="/#2" className="p-0 mx-10 font-['Orbit-Regular'] tracking-wide transition ease-in-out delay-25 hover:scale-125 hover:font-bold duration-150">Introduction</a></li>
                <li><a href="/#3" className="p-0 mx-10 font-['Orbit-Regular'] tracking-wide transition ease-in-out delay-25 hover:scale-125 hover:font-bold duration-150">Skills</a></li>
                <li><a href="/#4" className="p-0 mx-10 font-['Orbit-Regular'] tracking-wide transition ease-in-out delay-25 hover:scale-125 hover:font-bold duration-150">Experience</a></li>
                <li><a href="/#5" className="p-0 mx-10 font-['Orbit-Regular'] tracking-wide transition ease-in-out delay-25 hover:scale-125 hover:font-bold duration-150">Portpolio</a></li>
                <li><a href="/#6" className="p-0 mx-10 font-['Orbit-Regular'] tracking-wide transition ease-in-out delay-25 hover:scale-125 hover:font-bold duration-150">Contact</a></li>
            </ul>
            </div>
        </nav>  
    </>
  )
}

export default Nav
