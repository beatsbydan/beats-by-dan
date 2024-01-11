import React from 'react';
import './App.css';
import Navbar from './UI/Navbar/Navbar';
import Footer from './UI/Footer/Footer';
import {Routes, Route} from 'react-router-dom'
import loadable from '@loadable/component'


const Home = loadable(()=> import('./Components/Home/Home'),{
  fallback: <div/>
})
const Portfolio = loadable(()=> import('./Components/Portfolio/Portfolio'),{
  fallback: <div/>
})

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/portfolio"} element={<Portfolio/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
