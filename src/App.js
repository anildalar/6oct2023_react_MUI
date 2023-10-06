import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={ <Home/> }></Route>
        <Route path="/home" element={ <Home/> }></Route>
        <Route path="/contact" element={ <Contact/> }></Route>
        <Route path="/about" element={ <About/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
