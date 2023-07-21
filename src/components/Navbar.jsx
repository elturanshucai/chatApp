import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function Navbar() {
  const { currentUser } = useContext(AuthContext)
  return (
    <div className='navbar'>
      <span className='logo'>Çat App</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="photoURL" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Çıxış</button>
      </div>
    </div>
  )
}