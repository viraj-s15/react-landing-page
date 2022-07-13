import React from "react"
import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillDribbbleSquare
} from "react-icons/ai"
import { FaInstagram, FaGithubSquare } from "react-icons/fa"

const Footer = () => {
	return (
		<div className='flex bg-black text-white p-10 justify-evenly flex-col md:flex-row gap-10 w-full '>
			<div className='max-w-[35rem]'>
				<div className='mb-5'>
					<h1 className='text-lg mb-3 font-bold'>FinanceBoiz</h1>
					<p className='md:text-xl text-md'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ex
						dolorem maxime reprehenderit aperiam quibusdam voluptatem fugit
						perspiciatis, maiores itaque sequi vitae accusantium amet
						perferendis expedita sint, in enim blanditiis!
					</p>
				</div>
				<div className='flex gap-8'>
					<AiFillFacebook size={35} />
					<FaInstagram size={35} />
					<AiFillTwitterSquare size={35} />
					<FaGithubSquare size={35} />
					<AiFillDribbbleSquare size={35} />
				</div>
			</div>
			<div className='flex gap-10 max-w-[35rem]'>
				<div>
					<ul className='flex flex-col gap-2'>
						<li className='text-[#777] font-bold text-[1.15rem]'>Solutions</li>
						<li>Analytics</li>
						<li>Marketing</li>
						<li>Commerce</li>
						<li>Insights</li>
					</ul>
				</div>
				<div>
					<ul className='flex flex-col gap-2'>
						<li className='text-[#777] font-bold text-[1.15rem]'>Support</li>
						<li>Pricing</li>
						<li>Documentation</li>
						<li>Guides</li>
						<li>API Status</li>
					</ul>
				</div>
				<div>
					<ul className='flex flex-col gap-2'>
						<li className='text-[#777] font-bold text-[1.15rem]'>Company</li>
						<li>About</li>
						<li>Blog</li>
						<li>Jobs</li>
						<li>Press</li>
						<li>Partners</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer
