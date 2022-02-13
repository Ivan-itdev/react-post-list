import React from 'react'  

const MySelect = ({options, defaultValue, value, sortPosts}) => {
    return (
        <div>
            <select
                value={value}
                onChange={e => sortPosts(e.target.value)}
            >
                <option disabled value=''>{defaultValue}</option>
                {options.map(option => 
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
        </div>
    )
}

export default MySelect