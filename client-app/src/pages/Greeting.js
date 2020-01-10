import React from 'react'
import ClockUI from '../components/UI/ClockUI'
import GreetingUI from '../components/Greeting'
import './Greeting.css'
const Greeting = () => (

	<div className="center">

		<ClockUI />
		<br/>
		<GreetingUI />
	</div>

)

export default Greeting