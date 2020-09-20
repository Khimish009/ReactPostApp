import React from 'react'
import PostListItem from '../post-list-item/'

import './post-list.css'


const PostList = ({posts, onDelete, onToogleLiked, onToogleImportant}) => {

  const elements = posts.map(item => {
    return (
        <li key={item.id} className="list-group-item">
          <PostListItem 
            label={item.label}
            important={item.important}
            like={item.like}
            onDelete={() => onDelete(item.id)}
            onToogleImportant={() => onToogleImportant(item.id)}
            onToogleLiked={() => onToogleLiked(item.id)}
            />
        </li>
    )
  })

  return (
    <div className="app-list list-group">
      {elements}
    </div>
  )
}

export default PostList