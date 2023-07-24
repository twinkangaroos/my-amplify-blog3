import { Inter } from 'next/font/google'
import { useState, useEffect} from 'react';
import Link from 'next/link';

import { DataStore } from '@aws-amplify/datastore';
import { Post } from '../models';

import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Amplify, Auth } from 'aws-amplify'
import aws_exports from '../aws-exports'
Amplify.configure(aws_exports)

const inter = Inter({ subsets: ['latin'] })

function Home() {
  const [posts, setPosts] = useState([])
  const [username, setUsername] = useState('')
  
  useEffect(() => {
    fetchPosts()
    async function fetchPosts() {
      const postData = await DataStore.query(Post);
      setPosts(postData);
    }
    // real time functionality
    DataStore.observe(Post).subscribe(()  => {
      fetchPosts();
    });

    getUsername()
    async function getUsername() {
      const user = await Auth.currentAuthenticatedUser()
      setUsername(user.username)
    }
  }, [])

  const handleSignOut = (e) => {
    e.preventDefault()
    Auth.signOut()
  }

  return (
    <div>
      <h1>ログイン中のユーザー: {username}</h1>
      <h2>投稿リスト</h2>
      {
        posts.map(post => (
          <Link key={post.id} href={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
          </Link>
        ))
      }
      
      <div>
        <a href="." onClick={handleSignOut}>
          Sign Out
        </a>
      </div>
    </div>
  )
}

export default withAuthenticator(Home)
