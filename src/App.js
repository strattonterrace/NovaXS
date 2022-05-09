// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbarmenu from './Components/Header/Navbarmenu'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <>
    <Router>
      <Navbarmenu />
 <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/Contact' exact component={Contact} />
      </Switch>
      <Footer />
      </Router>
      </>
  );
}

export default App;
