import "./message.css"

export default function Message({own}) {
  return (
    <div className={ own ? "message own":"message"}>
        <div className="messageTop">
            <img className="messageImg" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt=""/>
            <p className="messageText">Hi this is mugundhan</p>
        </div>
        <div className="messageBottom">
            1 hour ago
        </div>
    </div>
  )
}
