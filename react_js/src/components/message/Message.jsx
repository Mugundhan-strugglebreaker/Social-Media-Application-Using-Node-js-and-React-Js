import "./message.css"
import {format} from "timeago.js"

export default function Message({message,own}) {
  return (
    <div className={ own ? "message own":"message"}>
        <div className="messageTop">
            <img className="messageImg" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt=""/>
            <p className="messageText">{message.text}</p>
        </div>
        <div className="messageBottom">
            {format(message.createdAt)}
        </div>
    </div>
  )
}
