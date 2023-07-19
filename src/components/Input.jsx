import { AddPhotoAlternateOutlined, AttachFileOutlined } from '@material-ui/icons'

export default function Input() {
  return (
    <div className='inputDiv'>
      <input type="text" placeholder='Mesaj yazın..' />
      <div className="send">
        <AttachFileOutlined />
        <input type="file" style={{ display: "none" }} id='file' />
        <label htmlFor="file">
          <AddPhotoAlternateOutlined />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}
