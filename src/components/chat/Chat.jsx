import { MoreHoriz, PersonAdd, VideoCall } from '@material-ui/icons'
import './chat.scss'
import Messages from '../messages/Messages'
import Input from '../input/Input'

export default function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Hamlet</span>
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
