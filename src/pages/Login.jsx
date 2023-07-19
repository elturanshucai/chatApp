import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
      <div className="formContainer">
        <div className="formTop">
          <p className='appName'>Çat App</p>
          <p className='pageName'>Daxil ol</p>
        </div>
        <form>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='parol' />
          <button type='submit'>Daxil ol</button>
        </form>
        <p>Hesabın yoxdur? <Link to='/register'>Qeydiyyat</Link></p>
      </div>
    </div>
  )
}
