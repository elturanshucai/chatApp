import { useContext, useEffect, useState } from "react"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "../firebase"
import { AuthContext } from "../context/AuthContext"
import { ChatContext } from "../context/ChatContext"

export default function Chats() {
  const { currentUser } = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext)
  const [chats, setChats] = useState([])

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data())
      })

      return () => {
        unsub()
      }
    }
    currentUser.uid && getChats()
  }, [currentUser.uid])

  const handleClick = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user })
  }

  return (
    <div className='chats'>
      {Object.entries(chats).map(chat => (
        <div className="userChat" key={chat[0]} onClick={() => handleClick(chat[1].userInfo)}>
          <img src={chat[1].userInfo.photoURL} alt="userImage" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))}

    </div>
  )
}
