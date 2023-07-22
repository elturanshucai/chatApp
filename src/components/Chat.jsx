import { MoreHoriz, PersonAdd, VideoCall } from '@material-ui/icons'
import Messages from './Messages'
import Input from './Input'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'

export default function Chat() {
  const { data } = useContext(ChatContext)
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <VideoCall />
          <PersonAdd />
          <MoreHoriz />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}
