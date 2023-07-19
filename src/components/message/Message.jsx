import './message.scss'

export default function Message() {
  return (
    <div className='message'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600" alt="user Image" />
        <span>İndi</span>
      </div>
      <div className="messageContent">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quaerat dolore, commodi aperiam error minus sed, quos ad provident est non nostrum, nam delectus odio harum aliquam eligendi possimus voluptatibus?</p>
        <img src="https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=600" alt="content Image" />
      </div>
    </div>
  )
}
