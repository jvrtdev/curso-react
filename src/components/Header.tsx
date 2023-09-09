import "./Header.css";

interface HeaderProps{
    title?: string
}


function Header({title = "Curso de React + Typescript"}: HeaderProps) {
    return(
        <header className="header">
            <h1 className="title">{title}</h1>
            <hr/>
        </header>
    )
}

export default Header;