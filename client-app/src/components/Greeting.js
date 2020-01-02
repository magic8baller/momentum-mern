import React, { Component } from 'react'
import {connect} from 'react-redux'
class Greeting extends Component {
	render() {
		return (
			<div>
Hello, {this.props.user.name}!
			</div>
		)
	}
}

const mapStateToProps = state => ({user: state.auth.user})

export default connect(mapStateToProps)(Greeting);