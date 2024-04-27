//import logo from './logo.svg';
//import './App.css';
import Header from './components/header/header';
import MainList from './components/main/main.js';
import { dataForList } from './content/mainData.js';
import Button from './components/button/button';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <dl>
            {dataForList.map((item) => <MainList {...item} />)}
          </dl>
        </section>
      </main>
      <section>
        <h3>All buttons</h3>
        <Button />
      </section>
    </div>
  );
}

export default App;
