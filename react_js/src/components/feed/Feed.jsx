import { useEffect, useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from "axios"

function Feed({username}) {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    const fetchPost = async()=>{
     const res = username ? await axios.get("/posts/profile/"+  username)
     :await axios.get("posts/timeline/all/620e4f178afb9e69547ab34b");
     setPosts(res.data)
    }
    fetchPost()
  },[username])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {
          posts.map( (p) =>(
            <Post key={p._id} post={p}/>
          ))
        }
      </div>
    </div>
  )
}

export default Feed