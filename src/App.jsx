import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Events from './pages/Events'
import Header from './components/Header'
import About from './pages/About'
import EventDetail from './pages/EventDetail'

const App = () => {
  return (
    <div className='w-full h-screen bg-white'>
      <Header/>
       <div className='w-full max-w-7xl mx-auto px-5'>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/events/:id' element={<EventDetail/>}/>
       </Routes>
       </div>
    </div>
  )
}

export default App