import React,{useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';

// import { BrowserRouter } from 'react-router-dom';
const App = () => {
  const [sidebar,setsidebar] = useState(true)
  return (
    <>
      <Navbar setsidebar={setsidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </>
  )
}

export default App