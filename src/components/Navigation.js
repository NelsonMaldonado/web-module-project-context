import React, { createContext, useContext } from "react"
import { NavLink } from "react-router-dom"

const Navigation = (props) => {
  const { cart } = useContext(createContext)
  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart <span>{cart.length}</span>
      </NavLink>
    </div>
  )
}

export default Navigation
