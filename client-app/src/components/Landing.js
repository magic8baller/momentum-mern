import React, {Component} from 'react'
import {connect} from 'react-redux'
import Dashboard from './Dashboard'
import Login from './Auth/Login'
class Landing extends Component {
	render () {
		return (
			<div>
			{this.props.isAuthenticated ? (<Dashboard/>) : (<Login/>)}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({isAuthenticated: state.auth.isAuthenticated})

export default connect(mapStateToProps)(Landing)