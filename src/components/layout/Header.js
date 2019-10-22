import React from 'react'

function Header() {
    return (
        <header>
            <h1 style={headerStyle}>Todo List</h1>
        </header>
    )
}

const headerStyle = {
    textAlign:'center',
    background: '#111',
    color:'#fff',
    fontFamily:'futura-bold',
    textTransform: 'uppercase',
    textShadow: '2px 2px #f0f0f0'

}
export default Header;
