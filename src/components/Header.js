import React from 'react'
import { FaCheckDouble } from 'react-icons/fa'
const Header = () => {
    return (
        <header className='header'>
            <nav>
                <div className="logo">
                    <span> <FaCheckDouble className='logoIcon' /> To-do </span>
                </div>

            </nav>
        </header>
    )
}

export default Header
