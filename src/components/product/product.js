import React, { Component } from 'react'

class Product extends Component {
  render () {
    const {
      id,
      title,
      description,
      url,
      votes,
      submitterAvatarUrl,
      productImageUrl
    } = this.props

    return (
      <div className="item">
        <div className="image">
          <img
            src={productImageUrl}
            alt="A graphic of the item."
          />
        </div>
        <div className="middle aligned content">
          <div className="description">
            <a href={url}>{title}</a>
            <p>{description}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img
              className="ui avatar image"
              src={submitterAvatarUrl}
              alt="The avatar of the user that posted the item."
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Product
