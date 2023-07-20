import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db, storage } from '../firebase'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

export default function Register() {

  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            // setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      // setLoading(false);
    }
  }

  return (
    <div className='register'>
      <div className="formContainer">
        <div className="formTop">
          <p className='appName'>Çat App</p>
          <p className='pageName'>Qeydiyyat</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='İstifadəçi adı' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='parol' />
          <label htmlFor='photo'>
            <img src='addImage.png' alt='addImage' />
            <span>Profil şəkli üçün klik edin</span>
            <input className='imageInput' id='photo' type='file' />
          </label>
          <button type='submit'>Qeydiyyatdan keç</button>
          {err && <span>Xəta baş verdi</span>}
        </form>
        <p>Hesabın var? <Link to='/login'>Daxil ol</Link></p>
      </div>
    </div>
  )
}
