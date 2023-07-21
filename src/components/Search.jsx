import { useState } from "react"
import { collection, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase"

export default function Search() {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState()
  const [err, setErr] = useState(false)

  const handleSearch = async () => {
    const usersRef = collection(db, 'users')
    const q = query(usersRef, where("displayName", "==", username))

    try {
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      })
    } catch (error) {
      setErr(true)
    }
  }

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  }
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='İstifadəçi axtar' onKeyDown={handleKey} onChange={e => setUsername(e.target.value)} />
      </div>
      {
        user && <div className="userChat">
          <img src={user.photoURL} alt="userImage" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      }
    </div>
  )
}
