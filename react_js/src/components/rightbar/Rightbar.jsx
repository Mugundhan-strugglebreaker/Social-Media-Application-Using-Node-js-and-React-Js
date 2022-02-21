import "./rightbar.css"
import {Users} from "../../dummyData";
import Online from "../online/Online";

function Rightbar() {

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img src="/assests/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText">
              {" "}
              <b>Meiyappan</b> and <b>2 other friends</b> have a birthday today
            </span>
          </div>
          <img src="/assests/ad.png" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {
              Users.map( (u)=>(
                <Online key={u.id} user={u}/>
              ))
            }
          </ul>
      </div>
    </div>
  )
}

export default Rightbar