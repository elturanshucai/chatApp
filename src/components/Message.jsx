import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { ChatContext } from "../context/ChatContext"

export default function Message({ message }) {
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)
  console.log(message)
  return (
    <div className='message owner'>
      {/* <div className="messageInfo">
        <img src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600" alt="user Image" />
        <span>İndi</span>
      </div>
      <div className="messageContent">
        <p>Salam</p>
        <img src="https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=600" alt="content Image" />
      </div> */}
    </div>
  )
}
