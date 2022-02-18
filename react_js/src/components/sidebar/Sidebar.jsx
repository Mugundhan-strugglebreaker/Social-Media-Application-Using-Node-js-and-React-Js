import "./sidebar.css"
import { Bookmark, Chat, Event, Groups, Help, PlayCircle, RssFeed, School, WorkOutline} from "@mui/icons-material"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className="sidebarIcon"/>
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <Chat className="sidebarIcon"/>
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <PlayCircle className="sidebarIcon"/>
              <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <Groups className="sidebarIcon"/>
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <Bookmark className="sidebarIcon"/>
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <Help className="sidebarIcon"/>
              <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon"/>
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <Event className="sidebarIcon"/>
              <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
              <School className="sidebarIcon"/>
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr" />
          <ul className="sidebarFriendList">
            <li className="sidebarFriend">
              <img src="/assests/person/2.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Meiyappan N</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/3.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Rajesh Kumar A</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/4.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Mukesh S</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/5.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Vignesh S</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/6.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Aravind</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/7.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Under Taker</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/8.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Arnold</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/9.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Steve Doe</span>
            </li>
            <li className="sidebarFriend">
              <img src="/assests/person/10.jpg" alt="" className="sidebarFriendImg" />
              <span className="sidebarFriendName">Ben 10</span>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Sidebar