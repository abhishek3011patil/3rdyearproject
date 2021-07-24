
import home_pic from './components/home_pic.svg'
import './App.css';
import { Header } from './components/Header';
import Home from './components/Home';
import News from './components/News';
import Contact from './components/Contact';
import Tracker from './components/Tracker';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Header title="CryptoTrak " >

    
      </Header>
      
      <Switch>

<Route path="/" exact component={Home}/>
<Route path="/Tracker" component={Tracker}/>
<Route path="/News" component={News}/>

<Route path="/Contact" component={Contact}/>

</Switch>
      </div>
      </Router>

    
  );
}

export default App;
