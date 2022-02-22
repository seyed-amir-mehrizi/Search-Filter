
import React, { useState } from 'react'
import { Users } from '../users';
function BasicSearch() {
    const [query, setQuery] = useState('');
    return (
        <div>
            <input type="text" className='search' placeholder='Search'
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <ul className='list'>
                {
                    Users.filter((user) => {
                        return user.first_name.toLowerCase().includes(query)
                    }).map((user) => {
                        return <li className='listItem' key={user.id}>{user.first_name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default BasicSearch
