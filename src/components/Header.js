import React from 'react';
import {Link, NavLink} from 'react-router-dom'
const Header =() =>(
  <div>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true} >Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Craete Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </div>
);
export default Header
