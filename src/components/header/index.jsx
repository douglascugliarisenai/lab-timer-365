import {Timer, ScrollText} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import './styles.css'

export function Header() {
    return (
        <header className="container--header">
            <img src="/Logo.png" alt="Logo tipo LAB Timer365" />
            <nav>
                <NavLink to="/" end><Timer size={24}/></NavLink>
                <NavLink to="/history" end><ScrollText size={24}/></NavLink>
            </nav>
        </header>
    )
}