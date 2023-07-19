import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='register'>
      <div className="formContainer">
        <div className="formTop">
          <p className='appName'>Çat App</p>
          <p className='pageName'>Qeydiyyat</p>
        </div>
        <form>
          <input type='text' placeholder='İstifadəçi adı' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='parol' />
          <label htmlFor='photo'>
            <img src='addImage.png' alt='addImage'/>
            <span>Profil şəkli üçün klik edin</span>
            <input className='imageInput' id='photo' type='file' />
          </label>
          <button type='submit'>Qeydiyyatdan keç</button>
        </form>
        <p>Hesabın var? <Link to='/login'>Daxil ol</Link></p>
      </div>
    </div>
  )
}
