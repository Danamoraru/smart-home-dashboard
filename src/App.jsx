import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="layout">
        <Sidebar />

        <main className="main-content">
          <h1>Dashboard</h1>
          <p>Bine ai venit în Smart Home Dashboard!</p>
        </main>
      </div>
    </div>
  )
}

export default App