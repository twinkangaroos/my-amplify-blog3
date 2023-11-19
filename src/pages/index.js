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
    const [clear_count, setClearCount] = useState(0)
    
    //useEffect(() => {
        // ローカルデータのクリア
        //clearData()
        //setClearCount(1)
    //}, [])

    useEffect(() => {
        //console.log("useEffect.", clear_count)
        //if (clear_count > 0) {
            console.log("useEffect start.")
            fetchPosts()
            getUsername()
            console.log("useEffect end.")
            //console.log("observe start.")
            //DataStore.observe(Post).subscribe(()  => {
            //    fetchPosts();
            //})
            //console.log("observe end.")
        //}
    }, [])

    
    async function clearData() {
        console.log("clearData", clear_count)
        if (clear_count === 0) {
            console.log("clear start")
            await DataStore.clear()
            //await DataStore.start()
            setClearCount(clear_count+1)
            console.log("clear end")
        }
    }
    

    async function fetchPosts() {
        try {
            console.log("query start")
            await DataStore.start()
            let postData = await DataStore.query(Post)
            setPosts(postData)
            //setIsInit(true)
            console.log("query end1", postData)
            if (!postData) {
                postData = await DataStore.query(Post);
                setPosts(postData)
            }
            console.log("query end2", postData)
        } catch(err) {
            console.log("query中にエラー発生。", err)
        }
    }

    async function getUsername() {
    const user = await Auth.currentAuthenticatedUser()
        setUsername(user.username)
    }
    
    const handleSignOut = (e) => {
        e.preventDefault()
        Auth.signOut()
    }
    
    const handleClear = async (e) => {
        e.preventDefault()
        clearData()
    }
    const handleFetch = async (e) => {
        e.preventDefault()
        fetchPosts()
    }

    return (
        <div>
        <h1>ログイン中のユーザー: {username}</h1>
        <h2>投稿リスト</h2>
        {
            posts ?
            posts.map(post => (
            <Link key={post.id} href={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
            </Link>
            ))
            :
            ''
        }
        <div>
            <a href="." onClick={handleClear}>clearData</a>
        </div>
        <div>
            <a href="." onClick={handleFetch}>fetchPosts</a>
        </div>
        
        <div>
            <a href="." onClick={handleSignOut}>
            Sign Out
            </a>
        </div>
        </div>
    )
}

export default withAuthenticator(Home)
