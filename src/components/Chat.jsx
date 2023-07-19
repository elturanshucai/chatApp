import { MoreHoriz, PersonAdd, VideoCall } from '@material-ui/icons'
import Messages from './Messages'
import Input from './Input'

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
