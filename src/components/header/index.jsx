import './styles.css'

export function Header() {
    return (
        <header className="container--header">
            <img src="/Logo.png" alt="Logo tipo LAB Timer365" />
            <nav>
                <a href="#">Home</a>
                <a href="#">Histórico</a>
            </nav>
        </header>
    )
}