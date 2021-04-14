import logo from './logo.svg';
import './App.css';
import Upload from './components/upload';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import GetStarted from './components/GetStarted';
import Tutorial from './components/Tutorial';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="page-head"> <a href="/">Aware</a></h1>
        <nav className="navigation">
            <a className="navLink" href="/">About Us</a>
            <a className="navLink" href="/" >Get in Touch</a>
        </nav>
      </header>
      <main>
          <Router>
            <Route exact path = '/' component={GetStarted}/>
            <Route path = '/upload' component = {Upload}/>
            <Route path = '/tutorial' component = {Tutorial}/>
          </Router>
        </main>
    </div>
  );
}

export default App;
