import React, { useState } from "react"
import { FcMenu } from "react-icons/fc"
import { FaWindowClose } from "react-icons/fa"

const Navbar = () => {
	const [toggleNav, setToggleNav] = useState(false)

	const handleNav = () => {
		setToggleNav(!toggleNav)
	}

	return (
		<div className='text-white flex justify-between items-center h-20 max-w-[1240px] mx-auto'>
			<h1 className='w-full text-3xl font-bold text-[#51dcff] mx-4'>
				FinanceBoiz.
			</h1>
			<ul className='hidden md:flex'>
				<li className='p-2 m-2 mx-3 hover:bg-white hover:text-black cursor-pointer rounded-md'>
					Home
				</li>
				<li className='p-2 m-2 mx-3 hover:bg-white hover:text-black cursor-pointer rounded-md'>
					Company
				</li>
				<li className='p-2 m-2 mx-3 hover:bg-white hover:text-black cursor-pointer rounded-md'>
					Resources
				</li>
				<li className='p-2 m-2 mx-3 hover:bg-white hover:text-black cursor-pointer rounded-md'>
					About
				</li>
				<li className='p-2 m-2 mx-3 hover:bg-white hover:text-black cursor-pointer rounded-md'>
					Contact
				</li>
			</ul>
			<div
				onClick={handleNav}
				className='cursor-pointer block mr-[1rem] md:hidden'
			>
				{toggleNav ? <FcMenu size={25} /> : <FaWindowClose size={25} />}
			</div>
			<div
				className={
					!toggleNav
						? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 md:hidden"
						: "fixed left-[-100%]"
				}
			>
				<h1 className='w-full text-3xl font-bold text-[#51dcff] mt-[22px] ml-[16px] mx-auto'>
					FinanceBoiz
				</h1>
				<ul className=' uppercase ta-center'>
					<li className='p-4 mx-3 border-b border-gray-600 '>Home</li>
					<li className='p-4 mx-3 border-b border-gray-600'>Company</li>
					<li className='p-4 mx-3 border-b border-gray-600'>Resources</li>
					<li className='p-4 mx-3 border-b border-gray-600'>About</li>
					<li className='p-4 mx-3 border-b border-gray-600'>Contact</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
