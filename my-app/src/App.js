//import logo from './logo.svg';
//import './App.css';
import Header from './components/header/header';
import MainList from './components/main/main.js';
import { dataForList, dataForButtons } from './content/mainData.js';
import Button from './components/button/button';
import { useState } from 'react';

function App() {
  const [contentFromButton, setNewContent] = useState('About us');

  //let contentFromButton = 'About us';
  const handleClick = (prop) => {
    console.log(prop);
    setNewContent(prop);
  }
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <dl>
            {dataForList.map((item) => <MainList {...item} />)}
          </dl>
        </section>
        <section>
          <h3>All buttons</h3>
          <Button onClick={() => handleClick('prop1')}>More</Button>
          <Button onClick={() => handleClick('prop2')}>More</Button>
          <Button onClick={() => handleClick('prop3')}>More</Button>
          <p>{dataForButtons[contentFromButton]}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
