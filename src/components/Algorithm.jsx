import React from "react"
import AlgoImg from "../assets/algo.png"

const Algorithm = () => {
	return (
		<div className=' w-full bg-white py-[15rem] px-4'>
			<div className='max-w-[1240px] mx-auto flex gap-8 items-center flex-col sm:flex-row'>
				<img className='rounded-[5rem]' src={AlgoImg} alt='complex algo' />
				<div className='flex flex-col gap-4 items-center text-center bg-white'>
					<p className='uppercase text-[#51dcff] text-xl md:text-3xl font-bold '>
						Analysing complex algorithms
					</p>
					<h1 className='font-bold md:text-2xl text-xl'>
						Managing your portfolio based on the result
					</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
						tempore hic accusamus ipsum deserunt, nostrum natus a. Ratione,
						corporis eum soluta alias maxime tenetur ex, delectus tempore
						similique aperiam in voluptatum id cum iste reprehenderit.
					</p>
					<button className='text-[#51dcff] my-3 bg-black font-bold p-3 text-2xl md:text-xl rounded-md hover:text-black hover:bg-[#51dcff]'>
						Get Started
					</button>
				</div>
			</div>
		</div>
	)
}

export default Algorithm
