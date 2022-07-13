import React from "react"
import Typed from "react-typed"

const Intro = () => {
	return (
		<div className='-mt-20 bg-[#000300] w-full'>
			<div className='max-w-[800px] h-screen mx-auto flex flex-col justify-center items-center '>
				<p className='text-[#51dcff] font-bold p-3 text-xl'>
					LARGEST FINANCIAL FIRM ON MARS
				</p>
				<h1 className='md:text-7xl sm:text-4xl text-3xl text-white font-bold py-4'>
					Grow with us.
				</h1>
				<div>
					<p className='text-bold md:text-3xl sm:text-2xl text-lg text-white font-bold py-4'>
						Fast, flexible financing for{" "}
						<Typed
							className='text-white font-bold'
							strings={["Stocks", "Real Estate", "Crypto", "Mutual Funds"]}
							typeSpeed={70}
							backSpeed={40}
							loop={true}
						/>
					</p>
				</div>
				<p className='text-[#777] font-bold py-4'>
					Maximising revenue using complex algorithms
				</p>
				<button className='text-black my-3 bg-[#51dcff] font-bold p-3 text-2xl md:text-xl rounded-md hover:bg-black hover:text-[#51dcff]'>
					Get Started
				</button>
			</div>
		</div>
	)
}

export default Intro
