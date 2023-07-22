import { useContext, useEffect, useRef } from "react"
import { AuthContext } from "../context/AuthContext"
import { ChatContext } from "../context/ChatContext"

export default function Message({ message }) {
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)
  const ref = useRef()

  useEffect(() => {
    ref.current.scrollIntoView({ behaviour: "smooth" })
  }, [message])
  return (
    <div className={currentUser.uid == message.senderId ? "message owner" : "message"} ref={ref}>
      <div className="messageInfo">
        <img src={currentUser.uid == message.senderId ? currentUser?.photoURL : data.user?.photoURL} alt="user Image" />
        <span>İndi</span>
      </div>
      <div className="messageContent">
        <p>{message?.text}</p>
        {message.img && <img src={message?.img} alt="content Image" />}
      </div>
    </div>
  )
}
