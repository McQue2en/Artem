//import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import MainList from './components/main/main.js';
import { dataForList, dataForButtons } from './content/mainData.js';
import Button from './components/button/button';
import { useState } from 'react';
import React from 'react';
import myImage from './bmw_m8.jpg';

function App() {
  const [contentFromButton, setNewContent] = useState('About us');

  const handleClick = (prop) => {
    console.log(prop);
    setNewContent(prop);
  }

  return (
    <div className="App">
      {/* Обертка для изображения с применением класса для стилей */}
      <div className='img-container'>
        <img src={myImage} className='img-custom' alt="BMW M8" />
      </div> 
      {/* Обертка для оставшегося содержимого с применением класса для стилей */}
      <div className='App-header'>
        <Header />
        <main>
          <section>
            <dl>
              {dataForList.map((item, index) => (
                // Добавляем ключ к каждому элементу списка
                <MainList key={index} {...item} />
              ))}
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
    </div>
  );
}

export default App;
