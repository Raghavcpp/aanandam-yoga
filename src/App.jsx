import React, { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom'
import Preloader from './sections/Pre';
const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <Preloader load={load} />
      {/* <div className="App" id={load ? "no-scroll" : "scroll"}> */}
       <Outlet/> 
      {/* </div> */}
    </>
  )
}

export default App