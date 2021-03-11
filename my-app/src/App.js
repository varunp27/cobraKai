import logo from './logo.svg';
import './App.css';
import Upload from './components/upload';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="page-head">Aware</h1>
        <nav aria-roledescription="navigation">
            <ul className="links">
                <li><a className="navLink" href="/">Home</a></li>
            </ul>
        </nav>
      </header>
      <main>
          <Router>
            <Route exact path = '/' component={GetStarted}/>
            <Route path = '/upload' component = {Upload}/>
          </Router>
        </main>
    </div>
  );
}

export default App;
