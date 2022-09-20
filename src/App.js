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
      <Person name="Sakib Al Hasan" profession="Cricketer"></Person>
      <Person name="Tom Cruise" profession="Actor"></Person>
      <Person profession="Singer"></Person>

      {/* Can use normal html tag too.. */}
      <h3>New component: YaY</h3>

      <Friend name="Sakib's Friend" phone="0172000000"></Friend>

    </div>
  );
}

      // Declaring Component
function Person(props){
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Profession: {props. profession}</p>
    </div>
  )
}

function Friend(props){
  return(
    <div className='friend'>
      <h1>{props. name}</h1>
      <p>Phone: {props. phone}</p>
    </div>
  )
}

export default App;
