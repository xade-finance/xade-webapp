import './App.css'
import Navbar from './Components/Navbar.js'
import Titlebar from './Components/Titlebar.js'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1100px)' })
  console.log(isTabletOrMobile)
  return (
     <section>
       <Navbar />
       {isTabletOrMobile && <Titlebar />}
     </section>
  );
}

export default App;
