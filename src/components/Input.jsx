import { AddPhotoAlternateOutlined, AttachFileOutlined } from '@material-ui/icons'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db, storage } from '../firebase'
import { v4 as uuid } from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

export default function Input() {
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)
  const [text, setText] = useState("")
  const [img, setImg] = useState(null)

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid())
      // const uploadTask = uploadBytesResumable(storageRef, img)
      await uploadBytesResumable(storageRef, img).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await updateDoc(doc(db, "chats", data?.chatId), {
            messages: arrayUnion({
              id: uuid(),
              text: text.trim(),
              senderId: currentUser.uid,
              date: Timestamp.now(),
              img: downloadURL
            })
          })
        });
      });
    } else {
      if (text.trim().length > 0) {
        await updateDoc(doc(db, "chats", data?.chatId), {
          messages: arrayUnion({
            id: uuid(),
            text: text.trim(),
            senderId: currentUser.uid,
            date: Timestamp.now()
          })
        })

      }
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data?.chatId + ".lastMessage"]: {
        text
      },
      [data?.chatId + ".date"] : serverTimestamp()
    })
    
    await updateDoc(doc(db, "userChats", data.user?.uid), {
      [data?.chatId + ".lastMessage"]: {
        text
      },
      [data?.chatId + ".date"] : serverTimestamp()
    })

    setText("")
    setImg(null)
  }
  return (
    <div className='inputDiv'>
      <input type="text"
        placeholder='Mesaj yazın..'
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <AttachFileOutlined />
        <input type="file"
          style={{ display: "none" }}
          id='file'
          onChange={e => setImg(e.target.files[0])}
          currentValue={img}
        />
        <label htmlFor="file">
          <AddPhotoAlternateOutlined />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}
