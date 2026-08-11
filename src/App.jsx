import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Devices from './pages/Devices'
import Energy from './pages/Energy'

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Navbar />

        <div className="layout">

          <Sidebar />

          <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/devices" element={<Devices />} />
         <Route path="/energy" element={<Energy />} />
        </Routes>

        </div>

      </div>

    </BrowserRouter>
  )
}

export default App