
import './App.css';
import Header from './components/Header'

import Home from './components/Home';
import News from './components/News';
import Contact from './components/Contact';
import Video from './components/Videos';
import Tracker from './components/Tracker';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'




function App() {
  return (
    <Router>
    <div className="App">
      
      <Switch>
<Route path="/" exact component={Home}/>
<Route path="/Tracker" component={Tracker}/>
<Route path="/News" component={News}/>
<Route path="/Videos" component={Contact}/>
<Route path="/Contact" component={Contact}/>

</Switch>
    
    </div>
    </Router>
  );
}

export default App;
