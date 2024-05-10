import React from 'react'
import { CardProduct } from '../components'

const Products = ({ index }) => {
  return (
    <div>
      <CardProduct product={index}/>
    </div>
  )
}

export default Products 
