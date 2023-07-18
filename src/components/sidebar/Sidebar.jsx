import Chats from '../chats/Chats'
import Navbar from '../navbar/Navbar'
import Search from '../search/Search'
import './sidebar.scss'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}
