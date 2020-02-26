import React from 'react'
import Home from './container/Home/Home'
import TBC from './container/TBC/TBC'
import How from './container/How/How'
import './App.css'
import Nav from './components/NavBar/Navbar'
function App() {
  return (
    <>
      <Nav></Nav>
      <Home></Home>
      <How></How>
      <TBC></TBC>
    </>
  )
}

export default App;
