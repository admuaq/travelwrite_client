import React, {Component} from 'react'
import Post from './components/Post/Post'
import Login from './containers/Login/LoginContainer'
import './App.css'

class App extends Component {
  state = {
    posts: [
      { id: 1, name: 'First Post!', content: 'I cant believe that I am finally in Japan!' },
      { id: 2, name: 'A new Journey', content: 'Hopping the waters to visit Saporo, Hokkaido!' },
      { id: 3, name: 'Is this for real?', content: 'A world within worlds' },
      { id: 4, name: 'Ronin: the story behind the name.', content: 'The samurai with a not so honourable story...' },
      { id: 5, name: 'First JPop experience: Why you are missing out', content: 'One word: incredible!' },
      { id: 6, name: 'Last week in Japan: Any suggestions?', content: 'What should I do within my last week in Japan?' },
      { id: 7, name: 'Homebound', content: 'Last day in Japan' }
    ],
    selected: {}
  }

  switchPostHandler = () => {
    const selectedPost = this.selectRandomPost()
    console.log(selectedPost)
    this.setState({selected: selectedPost})
  }

  selectRandomPost = () => {
    return this.state.posts[(Math.floor(Math.random() * this.state.posts.length))]
  }

  render () {
    return (
      <div className='App'>
        {/* <button onClick={this.switchPostHandler}>Click to switch Post</button> */}
        {/* <Post 
          postId={this.state.selected.id}
          postName={this.state.selected.name}
          postContent={this.state.selected.content}
        /> */}
         <div className='container'>
          <Login />
        </div>
      </div>
    )
  }
}

export default App
