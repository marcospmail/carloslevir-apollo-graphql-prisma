import React from 'react'
import { useMutation, useQuery } from '@apollo/client'

import logo from './logo.svg'
import './Home.css'
import { GET_POST } from '../../services/graphql/modules/post/queries'
import { CREATE_USER } from '../../services/graphql/modules/user/mutation'

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

  const [createUser, { data: userData }] = useMutation(CREATE_USER)

  function handleCreateUser() {
    createUser({ variables: { email: 'marcospasdasdadsad.mail@gmaiasdadl.com', name: 'Marcasasddados Paasdulo' } })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data?.post.title}
          {userData?.createUser.name}
          <button onClick={handleCreateUser}>Create User</button>
        </p>
      </header>
    </div>
  )
}

export default Home
