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
        {label: 'Going to learn React', important: false, like: false, id: 1},
        {label: 'Going to learn NODEJS', important: false, like: false, id: 2},
        {label: 'Going to learn Vue', important: false, like: false, id: 3},
        {label: 'Going to learn Flutters', important: false, like: false, id: 4},
      ],
      term: ''
    }
    this.deletePost = this.deletePost.bind(this)
    this.onAdd = this.onAdd.bind(this)
    this.onToogleImportant = this.onToogleImportant.bind(this)
    this.onToogleLiked = this.onToogleLiked.bind(this)
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
    this.searchPost = this.searchPost.bind(this)

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

    this.setState(({data}) => {
      const newArr = [...data, newPosts] 
      return {
        data: newArr
      }
    })
  }

  onToogleImportant(id) {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id)
      const oldItem = data[index]
      const newItem = {...oldItem, important: !oldItem.important}

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }
    })
    console.log('Important')
  }

  onToogleLiked(id) {
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id)
      const oldItem = data[index]
      const newItem = {...oldItem, like: !oldItem.like}

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }
    })
  }

  searchPost(items, term) {
    if(term.length === 0) {
      return items
    }

    return items.filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1)
  }

  onUpdateSearch(term) {
    this.setState({term})
  }

  render() {
    const {data, term} = this.state
    const liked = data.filter(item => item.like).length
    const allPost = data.length

    const visiblePost = this.searchPost(data, term)

    return (
      <div className="app">
        <AppHeader like={liked} allPost={allPost} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <PostStatusFilter />
        </div>
        <PostList 
          posts={visiblePost}
          onDelete={this.deletePost}
          onToogleImportant={this.onToogleImportant}
          onToogleLiked={this.onToogleLiked}
          />
        <PostAddForm onAdd={this.onAdd}/>
      </div>
    )
  }
}
