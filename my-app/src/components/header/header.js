import './header.css'
import logo from '../../logo.svg'
import{ useState } from 'react';
import logo from '/workspaces/Artem/my-app/src/content/images/bmw_logo.png'


export default () => {
    const[now, setNow] = useState(new Date());

    setInterval(() => setNow(new Date()), 1000)
return (
    <div className="App">
        <header>
            <img src={logo} alt='logo react'></img>
            <nav>
                <ul>
                    <li><a href='#'>Modelle</a></li>
                    <li><a href='#'>Electro machine</a></li>
                    <li><a href='#'>Konfigurator</a></li>
                    </ul>
                </nav>
                <span>Time now: {(now).toLocaleTimeString()}</span>
            </header>
        </div>
)
}