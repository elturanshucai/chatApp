import { useContext, useEffect, useRef } from "react"
import { AuthContext } from "../context/AuthContext"
import { ChatContext } from "../context/ChatContext"
import { format } from "timeago.js"

export default function Message({ message }) {
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)
  const ref = useRef()
  const timestamp = new Date(message.date.seconds * 1000 + message.date.nanoseconds / 1000000)
  console.log(format(timestamp))
  useEffect(() => {
    ref.current.scrollIntoView({ behaviour: "smooth" })
  }, [message])
  return (
    <div className={currentUser.uid == message.senderId ? "message owner" : "message"} ref={ref}>
      <div className="messageInfo">
        <div className="imageDiv">
          <img src={currentUser.uid == message.senderId ? currentUser?.photoURL : data.user?.photoURL} alt="user Image" />
        </div>
        <span>{format(timestamp)}</span>
      </div>
      <div className="messageContent">
        <p>{message?.text}</p>
        {message.img && <img src={message?.img} alt="content Image" />}
      </div>
    </div>
  )
}
