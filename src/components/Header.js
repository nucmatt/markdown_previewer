import React from 'react'

const Header = ({ icon, title }) => {
    return (
        <header className='navbar bg-primary'>
            <h1> <i className={icon}></i> {title}</h1>
        </header>
    )
}

Header.defaultProps = {
    icon: 'fab fa-markdown',
    title: 'Markdown Previewer'
}

export default Header

