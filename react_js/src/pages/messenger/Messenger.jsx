import "./messenger.css"
import Topbar from '../../components/topbar/Topbar'
import Conversation from "../../components/conversation/Conversation"
import Message from "../../components/message/Message"
import ChatOnline from "../../components/chatOnline/ChatOnline"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

function Messenger() {
  const [conversation,setConversation] = useState([]);
  const [currentChat , setCurrentChat] = useState(null);
  const [messages , setMessages] = useState([])
  const { user } = useContext(AuthContext);
  console.log(user)
  useEffect(()=>{
      const getConversations = async ()=>{
        try{  
            const res = await axios.get("/conversations/"+user._id);
            setConversation(res.data)
        }catch(err){
            console.log(err);
        }
      }
      getConversations();
  },[user._id])

  useEffect(()=>{
      const getMessages = async()=>{
          try{
              const res = await axios.get("/messages/"+currentChat?._id)
              setMessages(res.data);
          }catch(err){
              console.log(err);
          }
      }
      getMessages();
  },[currentChat])

  return (
      <>
        <Topbar/>
        <div className='messenger'>
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for Friends ?" className="chatMenuInput"/>
                    {
                        conversation.map( c =>(
                            <div onClick={()=>setCurrentChat(c)}>
                                <Conversation key={c._id} conversation={c} currentUser = {user}/>
                            </div>
                            
                        ))
                    }
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {
                        currentChat ? (
                            <>
                                <div className="chatBoxTop">
                                    {
                                        messages.map(m =>(
                                            <Message message={m} own={m.sender === user._id}/>
                                        ))
                                    }
                                </div>
                                <div className="chatBoxBottom">
                                    <textarea className="chatMessageInput" placeholder="write something..."></textarea>
                                    <button className="chatSubmitButton">Send</button>
                                </div>
                            </>
                        ):
                        <span className="noConversationText"> Open a Conversation to Start a chat.</span>
                    }
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline/>
                </div>
            </div>
        </div>
      </>
  )
}

export default Messenger