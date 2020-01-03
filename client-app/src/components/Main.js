import React from 'react'
import Header from './common/Header'


const Main = ({children}) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}
export default Main