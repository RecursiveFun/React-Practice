import React from 'react'

const headerStyle = {
    backgroundColor: 'orange',
    color: 'white',
    padding: '10px'
}

const Header = () => {
  return (
    <header style={headerStyle}>
        <h1>Groceries List</h1>
    </header>
  )
}

export default Header