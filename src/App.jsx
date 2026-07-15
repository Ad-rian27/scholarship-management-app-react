import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewApp from './components/ViewApp'
import AddApp from './components/AddApp'
import ViewScholar from './components/ViewScholar'
import AddScholar from './components/AddScholar'
import ViewStud from './components/ViewStud'
import AddStudent from './components/AddStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-applications" element={<ViewApp />} />

        <Route path="/add-applications" element={<AddApp />} />
        <Route path="/view-scholarships" element={<ViewScholar />} />
        
        

        <Route path="/add-scholarship" element={<AddScholar />} />
        <Route path="/view-students" element={<ViewStud />} />
        <Route path="/add-student" element={<AddStudent />} />
      </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
