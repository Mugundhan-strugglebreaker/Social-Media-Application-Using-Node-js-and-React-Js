import "./post.css"
import {MoreVert} from "@mui/icons-material"

function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assests/person/1.jpg" alt="" className="postProfileImg" />
                    <span className="postUsername">Mugundhan</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! It's my first post :)</span>
                <img src="/assests/post/1.jpg" alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                        <img className="likeIcon" src="/assests/like.png" alt="" />
                        <img className="heartIcon" src="/assests/heart.png" alt=""/>
                        <span className="postLikeCounter">32 people like it</span>
                </div>
                <div className="postBottomRight">
                     <span className="postCommentText">9 Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post