import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'

import '../App.css'

const Header = () => {
  return (
    <header>
      <ul>
        <li><NavLink to="/">トップページ</NavLink></li>
        <li><NavLink to="/users">ユーザー</NavLink></li>
      </ul>
    </header>
  )
}

export default withRouter(Header)