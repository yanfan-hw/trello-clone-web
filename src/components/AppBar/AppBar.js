import React from 'react'

import './AppBar.scss'

function AppBar() {
  return (
    <nav className='navbar-app'>
      <div className='navbar-menu-btn'>
        <i className="fa fa-th" />
      </div>
      <a className='navbar-logo' href='\'>
        <div>
          <div className='logo-loading' data-loading={false} />
        </div>
      </a>
    </nav>
  )
}

export default AppBar