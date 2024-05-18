import './header.css'
import logo from '../../content/imagesss/BMW_Logo.png';


export default () => {
return (
    <div className="App">
        <div className="white-strip"></div>
        <header>
            <img src={logo} alt='logo react'></img>
            <nav>
                <ul>
                    <li><a href='#'>Modelle</a></li>
                    <li><a href='#'>Electro machine</a></li>
                    <li><a href='#'>Konfigurator</a></li>
                    </ul>
                </nav>
            </header>
        </div>
)
}