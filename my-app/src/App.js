import logo from './logo.svg';
import './App.css';
import Upload from './components/upload';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import GetStarted from './components/GetStarted';
import Tutorial from './components/Tutorial';
import FooterPage from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navigation">
          <div className="left-links">
            <h1 className="navLink"> <a href="/">Aware</a></h1>
          </div>
          <div className="right-links">
            <a className="navLink" href="/">About Us</a>
            <a className="navLink" href="/" >Get in Touch</a>
          </div>
        </nav>
      </header>
      <main>
          <Router>
            <Route exact path = '/' component={GetStarted}/>
            <Route path = '/upload' component = {Upload}/>
            <Route path = '/tutorial' component = {Tutorial}/>
          </Router>
       </main>

      <FooterPage />

    </div>
  );
}

export default App;
