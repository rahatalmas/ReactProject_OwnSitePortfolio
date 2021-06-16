import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Nav from './components/NavBar/nav';
import Home from './components/HomeParts/Home';
import Contact from './components/ContactParts/Contact';
import About from './components/AboutParts/About';
import Blogs from './components/BlogsParts/Blogs';
import Footer from './components/FooterParts/Footer'
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
       <div>
         <Nav/>
       </div>
       <div>
           <Switch>
             <Route exact path="/">
               <Home/>
             </Route>
             <Route exact path="/contact">
               <Contact/>
             </Route>
             <Route exact path="/about">
               <About/>
             </Route>
             <Route exact path="/blogs">
               <Blogs/>
             </Route>
           </Switch>   
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </Router> 
  );
}

export default App;
