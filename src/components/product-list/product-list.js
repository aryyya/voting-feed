import React, { Component } from 'react'

import Seed from './seed'
import Product from '../product/product'

class ProductList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      products: []
    }

    this.handleProductUpVote = this.handleProductUpVote.bind(this)
  }

  componentDidMount () {
    this.setState({
      products: Seed.products
    })
  }

  handleProductUpVote (productId) {
    console.log(`Upvoting product id ${productId}.`)
  }

  render () {
    return (
      <div className="ui unstackable items">
        {this.state.products.map(product => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            url={product.url}
            votes={product.votes}
            submitterAvatarUrl={product.submitterAvatarUrl}
            productImageUrl={product.productImageUrl}
            onVote={this.handleProductUpVote}
          />
        ))}
      </div>
    )
  }
}

export default ProductList
