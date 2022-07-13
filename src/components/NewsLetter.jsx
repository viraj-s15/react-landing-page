import React from "react"

const NewsLetter = () => {
	return (
		<div className='w-full bg-black p-[2.5rem]'>
			<div className=' text-white py-[3.5rem] font-bold text-center mx-auto max-w-[800px]'>
				<h1 className='md:text-4xl sm:text-3xl text-2xl '>
					Want tips and tricks to boost your portfolio?
				</h1>
				<p className='py-5'>Sign up for our newsletter and stay updated</p>
				<div className='flex flex-col max-w-[500px] mx-auto gap-7 md:max-w-[800px]'>
					<input
						type='text'
						placeholder='Enter your email address'
						className='rounded-[1.5rem] py-1 text-black md:py-2'
					/>
					<button className='bg-[#51dcff] w-[10rem] p-2 text-black rounded-2xl mx-auto my-4 hover:bg-black hover:text-[#51dcff]'>
						Notify Me
					</button>
				</div>
				<p>
					We care about the protection of your data. Read our privacy policy
				</p>
			</div>
		</div>
	)
}

export default NewsLetter
