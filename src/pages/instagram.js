import { useState, useEffect } from 'react';

const Instagram = () => {
    const [access_token, setAccessToken] = useState("")
    const [hash_tag_name, setHashTagName] = useState("")
    const [user_id, setUserId] = useState("")
    //const domain = "https://main.d1xt4bgnw5tjtm.amplifyapp.com"
    const domain = "http://localhost:3000"

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${domain}/api/instagram`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_token: access_token,
                    hash_tag_name: hash_tag_name,
                    user_id: user_id
                })
            })
            const jsonData = await response.json()
            console.log("client result=")
            console.log(jsonData)
        } catch (err) {
            alert("error...")
        }
    }

    return (
        <div>
            <h1>Instagramリスト</h1>
            <div>
                access_token <input type="text" onChange={(e) => setAccessToken(e.target.value)} />
            </div>
            <div>
                hash_tag_name <input type="text" defaultValue="#cafe" onChange={(e) => setHashTagName(e.target.value)} />
            </div>
            <div>
                user_id <input type="text" defaultValue="6715969378458490" onChange={(e) => setUserId(e.target.value)} />
            </div>
            
            <form onSubmit={handleSubmit}>
                <button>InstagramAPI実行</button>
            </form>
            {/*
                posts.map(post => (
                <Link key={post.id} href={`/posts/${post.id}`}>
                    <h2>{post.id}</h2>
                </Link>
                ))
            */}
        </div>
    )
}

export default Instagram