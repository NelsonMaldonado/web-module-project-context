import React, { useContext } from "react"
import { productContext } from "../contexts/productContext"

const Product = (props) => {
  const { products, addItem } = useContext(productContext)

  return (
    <div className="product">
      <img src={product.image} alt={`${props.product.title} book`} />

      <h1 className="title">{props.product.title}</h1>

      <p className="price">${props.product.price}</p>

      <button onClick={() => props.addItem(product)}>Add to cart</button>
    </div>
  )
}

export default Product
