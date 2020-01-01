import React from 'react'

const TableRow = ({user}) => (
		<tr key={user._id}>
			<td>{user.name}</td>
			<td>{user.email}</td>
			<td>{user.role}</td>

		</tr>
	)




export default TableRow