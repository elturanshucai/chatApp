import { MoreHoriz, PersonAdd, VideoCall, MessageTwoTone } from '@material-ui/icons'
import Messages from './Messages'
import Input from './Input'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'

export default function Chat() {
  const { data } = useContext(ChatContext)
  return (
    <div className='chat'>
      {
        data.user.displayName ? <div className="chatInfo">
          <span>{data.user?.displayName}</span>
          <div className="chatIcons">
            <VideoCall />
            <PersonAdd />
            <MoreHoriz />
          </div>
        </div> : <div className='noChat'>
          <div className="noChatInfo">
            <MessageTwoTone />
            <span>İstifadəçi seçin</span>
          </div>
        </div>
      }

      {data.user.displayName && <Messages />}
      {data.user.displayName && <Input />}
    </div>
  )
}
