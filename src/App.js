import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Footer from './Components/Footer/Footer'
import Navbarmenu from './Components/Header/Navbarmenu';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Telosis from './Pages/Telosis/Telosis';
import Timeline from './Pages/Timeline/Timeline';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <>
  <Router basename="/">
    <Navbarmenu />
    <main>
      <Switch> 
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/telosis" component={Telosis}/>
          <Route path="/timeline" component={Timeline}/>
          <Route path="/contact" component={Contact}/>
          <Redirect to="/" />
        </Switch>
        </main>
        <Footer/>
      </Router>

    </>

  );
}

export default App;
