
import React, { useState } from 'react'

export default function TableSearch({ data }) {
    const [query, setQuery] = useState('');
    const filterUsers = (users) => {
        return users.filter((user) => {
            return user.first_name.toLowerCase().includes(query) ||
                user.last_name.toLowerCase().includes(query) ||
                user.email.toLowerCase().includes(query)
        })
    }
    return (
        <div>
            <input type="text" className='search form-control w-25 my-3' placeholder='Search'
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterUsers(data).map((user) => {
                            return <tr key={user.id}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                            </tr>
                        })
                    }
                    <tr>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
