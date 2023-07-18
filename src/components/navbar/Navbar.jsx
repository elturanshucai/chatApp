import './navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>Çat App</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/17427589/pexels-photo-17427589/free-photo-of-portrait-of-a-male-model-wearing-a-black-jacket-and-white-shoes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>Elturan</span>
        <button>Çıxış</button>
      </div>
    </div>
  )
}