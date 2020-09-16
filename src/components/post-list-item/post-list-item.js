import React from 'react'

const PostListItem = () => {
  return (
    <div>
      <li className="app-list-item d-flex justify-content-between">
        <span className="app-list-item-label">Hello Salman</span>
        <div className="d-flex justify-content-center align-item-center">
          <button type="button" className="btn-star btn-sm">
            <i className="fa fa-star"></i>
          </button>
          <button type="button" className="btn-trash btn-sm">
            <i className="fa fa-trash-o"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </li>
    </div>
  )
}

export default PostListItem