import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import Message from './Message'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'

export default function Messages() {
  const { data } = useContext(AuthContext)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return () => unsub()
  }, [data.chatId])
  return (
    <div className='messages'>
      {messages.map(m => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  )
}
