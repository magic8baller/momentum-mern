import React, { Component } from 'react'
import {connect} from 'react-redux'
class Greeting extends Component {
	render() {
		return (
			<div>
				Hello, 
			</div>
		)
	}
}

const mapStateToProps = state => ({auth: state.auth})

export default connect(mapStateToProps)(Greeting)