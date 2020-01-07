import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../../store/actions/authActions'
class Header extends Component {


	renderLinks = () => {
		if (this.props.isAuthenticated) {
			return (
				<>
					<a href='/' className="nav__single-link" onClick={() => this.props.logoutUser(this.props.token)}>Sign Out</a> &nbsp; &nbsp;
				<Link className="nav__single-link" to="/">Dash</Link>
				</>
			)
		} else {
			return (
				<>
					<Link className="nav__single-link" to="/register">Sign Up</Link> &nbsp; &nbsp;
				<Link className="nav__single-link" to="/login">Sign In</Link>
				</>

			);
		}
	}

	render () {
		return (
			<div className='header'>
				<nav className="nav">
					<div className="nav__header">
						<img
							src="../../img/skitch.png"
							alt="logo"
						/>
						<span class="nav__btn">
							<i class="far fa-hand-point-down"></i>
						</span>
					</div>
					<ul class="nav__links">
						{this.renderLinks()}
					</ul>
				</nav>
			</div>
		)
	}
}
const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated, token: state.auth.token})

export default connect(mapStateToProps, {logoutUser})(Header)