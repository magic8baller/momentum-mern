import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import AdminTable from './AdminTable'
class AdminEditor extends Component {

	state = {
		users: []
	}

	componentDidMount() {
		this.getUsers()
	}
	getUsers = () => {
		const config = {
			headers: {
				'Authorization': `Bearer ${this.props.auth.token}`
			}
		}

		axios.get('http://localhost:8000/users', config)
		.then(res => this.setState({users: res.data}))
		.catch(err => console.error(err))
	}

	renderPage = () => {
	if (this.props.auth.user && this.props.auth.user.role === 'admin') {
		return (

			<div><AdminTable users={this.state.users} token={this.props.auth.token}/></div>)

	} else {
		return <span>You musst be an admin to view this page!</span>
	}
}
	render() {
		return (
			<div>
{this.renderPage}
			</div>
		)
	}
}

const mapStateToProps = state => ({auth: state.auth})
export default connect(mapStateToProps)(AdminEditor)