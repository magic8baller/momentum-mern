import React, { Component } from 'react'
import {connect} from 'react-redux'
class Greeting extends Component {
	render() {
		return (
			<div id="greeting" className="widget-container greeting bold">
			<span className="content">
			<span className="message">Hello,
			</span><span className='name-wrapper'>{this.props.auth.user.name}!</span></span>


			</div>
		)
	}
}

const mapStateToProps = state => ({auth: state.auth})

export default connect(mapStateToProps)(Greeting)