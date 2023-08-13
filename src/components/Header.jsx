import imag from '../assets/LOGO.png'
import '../styles/Header.css'
function Header() {
  return (
   <header>
        <div className='logo'>
           <img src={imag} />
          <h2>Memes Generator</h2>
        </div>
       <p>React Project</p>
   </header>
  )
}

export default Header
