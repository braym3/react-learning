import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Users from './components/Users';
import Contact from './components/Contact';
import Error404 from './components/Error404';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/shop">
        <Shop/>
      </Route>
      <Route path="/users">
        <Route path=":id" element={<Users/>}/>
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
