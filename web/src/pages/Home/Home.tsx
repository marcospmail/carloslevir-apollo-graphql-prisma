import React from 'react'
import { useQuery } from '@apollo/client'

import logo from './logo.svg'
import './Home.css'
import { GET_POST, GET_POSTS } from '../../services/graphql/modules/post/queries'

interface Post {
  title: string
  content: string
  published: boolean
}

function Home() {
  const { loading, error, data } = useQuery<{ post: Post }>(GET_POST, {
    variables: {
      id: "09c9e6b4-4fad-4cd5-b482-6ce1bb29757d"
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { data?.post.title}
          {/* { data?.posts.map(post => post.title )} */}
        </p>
      </header>
    </div>
  )
}

export default Home
