import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logoutUser} from '../../store/actions/authActions';
class Header extends Component {


	renderLinks = () => {
		if (this.props.isAuthenticatedn) {
		return (
			<div>
				<a href='/' onClick={() => this.props.logoutUser(this.props.token)}>Sign Out</a> &nbsp; &nbsp;
				<Link to="/">Feature</Link>
				</div>
				);
				 } else {
				 return (
				 <div>
						 <Link to="/register">Sign Up</Link> &nbsp; &nbsp;
				<Link to="/login">Sign In</Link>
			</div>
		);
	}
}

	render () {
		return (
			<div className='header'>
				{this.renderLinks()}
			</div>
		)
	}
}
const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated, token: state.auth.token})

export default connect(mapStateToProps, {logoutUser})(Header)