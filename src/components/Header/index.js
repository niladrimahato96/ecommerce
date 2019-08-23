import React from 'react'

const Header = ({ loading }) => {
    return (
        <header>
            <p>{loading ? 'Loading...' : ''}</p>
        </header>
        )
}

export default Header;
