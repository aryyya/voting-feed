import React, { Component } from 'react'

import products from './seed'
import Product from '../product/product'

products.sort((a, b) => b.votes - a.votes)

class ProductList extends Component {
  render () {
    return (
      <div className="ui unstackable items">
        {products.map(product => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            url={product.url}
            votes={product.votes}
            submitterAvatarUrl={product.submitterAvatarUrl}
            productImageUrl={product.productImageUrl}
          />
        ))}
      </div>
    )
  }
}

export default ProductList
