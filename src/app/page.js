import React from 'react'
import Posts from './components/Posts'
import PostsProvider from './components/PostsProvider'

const Home = () => {
  return (
    <PostsProvider>
      <Posts />
    </PostsProvider>
  )
}

export default Home