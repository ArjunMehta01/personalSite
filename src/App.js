import logo from './logo.svg';
import './App.css';

import Division from './components/Division';
import ProjectGrid from './components/ProjectGrid';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        className="navcolored"
      >
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav> */}
      <h1 style={{paddingTop: '5%'}}>Hi My Name is Arjun</h1>
      <p style={{paddingBottom: '5%'}}>I like to cha cha</p>
      <Division content="aboutMe"/>
      
      <Division content="skills" />
      <Division content="project"/>
      <div style={{backgroundColor: '#fb93fc', width: '100%', margin: '0%'}}>
        <h1 style={{padding: '2%'}}>These are my projects</h1>
        <ProjectGrid />
      </div>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
