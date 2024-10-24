import React from 'react'
import Nav from './components/Nav'
import Search from './components/Search'
import Content from './components/Content'
import Post from './components/Post'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
        <Nav></Nav>
        <Search></Search>
        <Content></Content>
      <Post></Post>
      <Footer></Footer>
    </div>
  )
}

export default App