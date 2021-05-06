import logo from './logo.svg';
import './App.css';
import Upload from './components/upload';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import GetStarted from './components/GetStarted';
import Tutorial from './components/Tutorial';
import FooterPage from './components/Footer';
import Results1 from './components/Results1'
import Parent from './components/Parent';

function App() {

  
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <nav className="navigation">
            <div className="left-links">
              <h1 className="navLink"> <a href="/cobraKai">Aware</a></h1>
            </div>
            <div className="right-links">
              <a className="navLink" href="/cobraKai/aboutus"><Link to="/aboutus">About Us</Link></a>
              <a className="navLink" href="/" >Get in Touch</a>
            </div>
          </nav>
        </header>
        <main>
            <Parent />
            
        </main>

        

      </div>
    </div>
  );
}

export default App;
