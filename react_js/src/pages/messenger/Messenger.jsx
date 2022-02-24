import "./messenger.css"
import Topbar from '../../components/topbar/Topbar'
import Conversation from "../../components/conversation/Conversation"

function Messenger() {
  return (
      <>
        <Topbar/>
        <div className='messenger'>
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for Friends ?" className="chatMenuInput"/>
                    <Conversation/>
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    Box
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    Online
                </div>
            </div>
        </div>
      </>
  )
}

export default Messenger