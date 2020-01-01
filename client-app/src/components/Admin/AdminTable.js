import React from 'react'
import TableRow from './TableRow'

const AdminTable = ({users}) => {
	return (
		<div className="table-resposive">
			<table className="table table-striped">
				<thead className="thead-dark">
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Role</th>
						<th scope="col">Password</th>
						<th scope="col">Save</th>
					</tr>
				</thead>
				<tbody>
					{(users).map(user =>
						<TableRow key={user._id} user={user} />
					)}
				</tbody>
			</table>
	</div>
	)
}





export default AdminTable