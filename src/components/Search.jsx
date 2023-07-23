import { useContext, useState } from "react"
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore"
import { db } from "../firebase"
import { AuthContext } from "../context/AuthContext"

export default function Search() {
  const { currentUser } = useContext(AuthContext)
  const [username, setUsername] = useState("")
  const [user, setUser] = useState()
  const [err, setErr] = useState(false)

  const handleSearch = async () => {
    if (username.trim().length === 0) {
      alert("İstifadəçi adını yazın")
      return
    }
    else if (username.trim() === currentUser.displayName) {
      alert("İstifadəçi sənsən")
      return
    }
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

  const handleClick = async () => {
    const combinedId = currentUser.uid > user.uid ?
      currentUser.uid + user.uid
      : user.uid + currentUser.uid

    try {
      const res = await getDoc(doc(db, "chats", combinedId))
      if (!res.exists()) {
        //create chat collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] })

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedId + ".date"]: serverTimestamp()
        })
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId + ".date"]: serverTimestamp()
        })
      }
    } catch (error) {
      setErr(true)
    }
    setUser(null)
    setUsername("")
  }
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text"
          placeholder='İstifadəçi axtar'
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <button onClick={handleSearch}>Axtar</button>
      </div>
      {
        user && <div className="userChat" onClick={handleClick}>
          <img src={user.photoURL} alt="userImage" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      }
    </div>
  )
}
