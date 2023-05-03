import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import{AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div>
      <Link to='/'>
        <h1 >Cryptobase</h1>
      </Link>
      <div>
        <ThemeToggle/>
      </div>
      <div>
        <Link to='/signin'>Sign In</Link>
        <Link to='/signup'>Sign Up</Link>
      </div>
      <div>
        <AiOutlineMenu/>
      </div>
      <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
        </ul>
      </div>
    </div>

  )
}

export default Navbar
