
import React, { useState } from 'react'
function BasicSearch({data}) {
    const [query, setQuery] = useState('');
    return (
        <div className='text-center' >
            <input type="text" className='search form-control w-25' placeholder='Search'
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <ul className='list'>
                {
                    data.filter((user) => {
                        return user.first_name.toLowerCase().includes(query)
                    }).map((user) => {
                        return <li className='listItem text-left my-2' key={user.id}>{user.first_name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default BasicSearch
