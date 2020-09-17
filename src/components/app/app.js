import React, { Component } from 'react'
import AppHeader from '../app-header/'
import SearchPanel from '../search-panel/'
import PostStatusFilter from '../post-status-filter/'
import PostList from '../post-list/'
import PostAddForm from '../post-add-form/'

import './app.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {label: 'Going to learn React', important: true, id: 1},
        {label: 'Going to learn NODEJS', important: false, id: 2},
        {label: 'Going to learn Vue', important: false, id: 3},
        {label: 'Going to learn Flutters', important: true, id: 4},
      ]
    }
    this.deletePost = this.deletePost.bind(this)
    this.onAdd = this.onAdd.bind(this)

    this.maxId = 5
  }

  deletePost(id) {
    this.setState(({data}) => ({
      data: data.filter(item => item.id !== id)  // TODO 
    }))
  }

  onAdd(body) {
    const newPosts = {
      label: body,
      important: false,
      id: this.maxId++
    }

    this.setState(({data}) => ({
      data: [...data, newPosts]
    }))
  }

  render() {
    const {data} = this.state
    return (
      <div className="app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={data} onDelete={id => this.deletePost(id)} />
        <PostAddForm onAdd={body => this.onAdd(body)}/>
      </div>
    )
  }
}
