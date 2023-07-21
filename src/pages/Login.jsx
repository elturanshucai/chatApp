import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export default function Login() {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    try {
       await signInWithEmailAndPassword(auth, email, password)
       navigate("/")
    } catch (error) {
      setErr(true)  
    }
  }
  return (
    <div className='login'>
      <div className="formContainer">
        <div className="formTop">
          <p className='appName'>Çat App</p>
          <p className='pageName'>Daxil ol</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='parol' />
          <button type='submit'>Daxil ol</button>
          {err && <span>Xəta baş verdi</span>}
        </form>
        <p>Hesabın yoxdur? <Link to='/register'>Qeydiyyat</Link></p>
      </div>
    </div>
  )
}
