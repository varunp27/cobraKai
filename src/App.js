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
       
        <main>
            <Parent />
            
        </main>

        

      </div>
    </div>
  );
}

export default App;
