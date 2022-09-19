import logo from './logo.svg';
import './App.css';

const number = 789;
const singer = {name: 'Dr. Mahfuzur Rahman', job: 'Singer'}
const singer2 = {name: 'Eva Rahman', job: 'Singer'}
const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>HHeeeyy React</h3>
        </div>
        <div className="music">
          <p>ID: { number }</p>
          <p style={{color: 'blue', backgroundColor: 'yellow'}}>Name: { singer.name }</p>
          <p style = {singerStyle}>Name: { singer2.name }</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Person></Person>

    </div>
  );
}

function Person(){
  return <div>
    <h1>Sakib Al Hasan</h1>
    <p>Profession: Cricketer</p>
  </div>
}

export default App;
