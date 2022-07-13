import React from "react"
import single from "../assets/single.png"
import double from "../assets/double.png"
import triple from "../assets/triple.png"

const PricePlans = () => {
	return (
		<div className='flex my-[10rem] flex-col md:flex-row justify-evenly gap-[5rem] m-3'>
			<div className='flex flex-col text-center items-center hover:scale-105 duration-500 max-w-[25rem] max-h-[35rem] shadow-md rounded-[25px]'>
				<img
					className='max-h-[5rem] pt-5 ml-10'
					src={single}
					alt='single image'
				/>
				<h1 className='my-7 font-bold text-2xl md:text-3xl pb-[1.5rem] border-b '>
					Single User
				</h1>
				<h1 className='my-2 font-bold text-2xl md:text-4xl border-b pb-9 w-full'>
					$149
				</h1>
				<p className='font-bold text-xl md:text-2xl border-b pb-3 w-full'>
					500GB
				</p>
				<p className='font-bold text-l   md:text-xl border-b p-3 w-full'>
					Withdraw upto $100/month
				</p>
				<button className='m-7 bg-[#51dcff] text-black px-5 py-3 rounded-md font-bold hover:bg-black hover:text-[#51dcff]'>
					Start Trial
				</button>
			</div>
			<div className='flex flex-col text-center items-center hover:scale-105 duration-500 max-w-[25rem] max-h-[35rem] shadow-md rounded-[25px] bg-[#d8d8d8da]'>
				<img className='max-h-[5rem] pt-5' src={double} alt='single image' />
				<h1 className='my-7 font-bold text-2xl md:text-3xl pb-[1.5rem] border-b'>
					Partnership
				</h1>
				<h1 className='my-2 font-bold text-2xl md:text-4xl border-b pb-9 w-full'>
					$250
				</h1>
				<p className='font-bold text-xl md:text-2xl border-b pb-3 w-full'>
					1TB
				</p>
				<p className='font-bold text-l   md:text-xl border-b p-3 w-full'>
					Withdraw upto $150/month
				</p>
				<button className='m-7 bg-black text-[#51dcff] px-5 py-3 rounded-md font-bold hover:text-black hover:bg-[#51dcff]'>
					Start Trial
				</button>
			</div>
			<div className='flex flex-col text-center items-center hover:scale-105 duration-500 max-w-[25rem] max-h-[35rem] shadow-md rounded-[25px]'>
				<img className='max-h-[5rem] pt-5' src={triple} alt='single image' />
				<h1 className='my-7 font-bold text-2xl md:text-3xl pb-[1.5rem] border-b '>
					Group Account
				</h1>
				<h1 className='my-2 font-bold text-2xl md:text-4xl border-b pb-9 w-full'>
					$500
				</h1>
				<p className='font-bold text-xl md:text-2xl border-b pb-3 w-full'>
					10TB
				</p>
				<p className='font-bold text-l   md:text-xl border-b p-3 w-full'>
					Withdraw upto $250/month
				</p>
				<button className='m-7 bg-[#51dcff] text-black px-5 py-3 rounded-md font-bold hover:bg-black hover:text-[#51dcff]'>
					Start Trial
				</button>
			</div>
		</div>
	)
}

export default PricePlans
