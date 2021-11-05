import React, { useState } from "react"
import { Route } from "react-router-dom"
import data from "./data"

import { productContext } from "./contexts/productContext"
import { CartContext } from "./contexts/cartContext"
// Components
import Navigation from "./components/Navigation"
import Products from "./components/Products"
import ShoppingCart from "./components/ShoppingCart"

function App() {
  const [products] = useState(data)
  const [cart, setCart] = useState([])

  const addItem = (item) => {
    setCart([...cart, item])
    // add the given item to the cart
  }

  return (
    <div className="App">
      <Navigation />

      {/* Routes */}
      <CartContext.Provider value={cart}>
        <productContext.Provider value={{ products, addItem }}>
          <Route exact path="/">
            <Products value />
          </Route>

          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </productContext.Provider>
      </CartContext.Provider>
    </div>
  )
}

export default App
