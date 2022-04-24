import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound'
import DetailProduct from './Pages/DetailProduct'

const App = () =>{

return(
  <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path='*' element={<NotFound />} />
    <Route path='/detailproduct' element={<DetailProduct />} />
    </Routes>
  </Router>
)
}

export default App;
