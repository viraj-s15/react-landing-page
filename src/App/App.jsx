import React from "react"
import Navbar from "../components/Navbar"
import Intro from "../components/Intro"
import Algorithm from "../components/Algorithm"
import NewsLetter from "../components/NewsLetter"
import PricePlans from "../components/PricePlans"
import Footer from "../components/Footer"

const App = () => {
	return (
		<div>
			<Navbar />
			<Intro />
			<Algorithm />
			<NewsLetter />
			<PricePlans />
			<Footer />
		</div>
	)
}

export default App
