import "./post.css"
import {MoreVert} from "@mui/icons-material"
import { Users } from "../../dummyData"
function Post({post}) {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u)=> u.id===post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">{Users.filter((u)=> u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                        <img className="likeIcon" src="/assests/like.png" alt="" />
                        <img className="heartIcon" src="/assests/heart.png" alt=""/>
                        <span className="postLikeCounter">{post.like} people like it</span>
                </div>
                <div className="postBottomRight">
                     <span className="postCommentText">{post.comment} Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post