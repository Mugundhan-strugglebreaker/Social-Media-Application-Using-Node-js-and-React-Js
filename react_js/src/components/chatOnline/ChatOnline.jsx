import "./chatOnline.css"

export default function ChatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img className="chatOnlineImg" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt=""/>
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Meiyappan</span>
      </div>
    </div>
  )
}
