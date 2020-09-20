import React from 'react'

import './app-header.css'

const AppHeader = ({like, allPost}) => {
  return (
    <div className="app-header d-flex">
      <h1>Salman Khimishev</h1>
      <h2>{allPost} записей, из них понравилось {like}</h2>
    </div>
  )
}

export default AppHeader