import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Users from './components/Users';
import Contact from './components/Contact';
import Error404 from './components/Error404';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/shop">
        <Shop/>
      </Route>
      <Route path="/users" exact>
        <Users/>
      </Route>
      <Route path="/users/:id">
        <Users/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/404">
        <Error404/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
