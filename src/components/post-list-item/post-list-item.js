import React, { Component } from 'react'
import './post-list-item.css'

export default class PostListItem extends Component {
  render() {
    const {label, onDelete, onToogleLiked, onToogleImportant, important, like} = this.props
    let classNames = 'app-list-item d-flex justify-content-between'

    if(important) classNames += ' important'
    if(like) classNames += ' like'

    return (
      <div>
        <div className={classNames}>
          <span 
            className="app-list-item-label" 
            onClick={onToogleLiked}>{label}
          </span>
          <div className="d-flex justify-content-center align-item-center">
            <button type="button" className="btn-star btn-sm" onClick={onToogleImportant}>
              <i className="fa fa-star"></i>
            </button>
            <button type="button" className="btn-trash btn-sm">
              <i className="fa fa-trash-o" onClick={onDelete}></i>
            </button>
            <i className="fa fa-heart"></i>
          </div>
        </div>
      </div>
    )
  }
}
