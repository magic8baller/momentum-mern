import React, {Component} from 'react'
import {connect} from 'react-redux'
import {clearError, loadUser} from '../../store/actions/authActions.js'
import Spinner from '../common/Spinner'
import LoginForm from './LoginForm'
class LoginPage extends Component {

	// componentDidMount () {
	// 	this.props.loadUser()
	// 	this.props.clearError()
	// 	if (this.props.isAuthenticated) {
	// 		this.props.history.push('/')
	// 	}

	// 	if (this.props.isLoading) {
	// 		return (
	// 			<div style={{textAlign: 'center'}}>
	// 				<Spinner />
	// 			</div>
	// 		)
	// 	}
	// }
	render () {
		// 	if (this.props.isAuthenticated) {
		// 	this.props.history.push('/')
		// }

		// if (this.props.isLoading) {
		// 	return (
		// 		<div style={{textAlign: 'center'}}>
		// 			<Spinner />
		// 		</div>
		// 	)
		// }
		return (
			<section className="section">
				<div className="columns is-mobile is-multiline is-centered">
					<div className="column is-12-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
						<h1 className="title" style={{marginBottom: '12px'}}>
							WELCOME! Login to Your Account:
          		</h1>
						<hr className="is-divider" style={{marginBlockStart: '0'}} />
						<LoginForm />
					</div>
				</div>
			</section>
		)
	}
} //end class

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	loginError: state.auth.errorMesage,
	isLoading: state.auth.isLoading
})

export default connect(
	mapStateToProps,
	{loadUser, clearError}
)(LoginPage)