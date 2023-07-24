const axios = require('axios');

const Instagram = async(req, res) => {
    console.log("api start.......................................................")
    console.log("req.body=", req.body)
    console.log("token=", req.body.access_token)
    console.log("hash_tag_name=", req.body.hash_tag_name)
    console.log("user_id=", req.body.user_id)

    const access_token = req.body.access_token
    const hash_tag_name = req.body.hash_tag_name
    const user_id = req.body.user_id

    const apiUrl = `https://graph.instagram.com/v17.0/ig_hashtag_search?user_id=${user_id}&q=${hash_tag_name}&access_token=${access_token}`;

    //const instagram_id = "6715969378458490";
    
    const posts = []
    let result = null

    axios.get(apiUrl)
        .then(response => {
            const hashtagPosts = response.data.data;
            console.log("response.data.data=")
            console.log(response.data.data)
            result = response.data.data
            //hashtagPosts.forEach(post => {
            //    console.log("post.id=", post.id); // ポストのIDを表示する例
            //});
        })
        .catch(error => {
            console.error('エラーが発生しました:', error);
        });

    res.status(200).json({ result:result })
}

export default Instagram