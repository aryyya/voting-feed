import React from 'react'
import './App.css'

import ProductList from './components/product-list/product-list'

const App = () => {
  return (
    <div className="app main ui text container">
      <h1 className="ui dividing centered header">Popular Products</h1>
      <ProductList />
    </div>
  )
}

export default App
