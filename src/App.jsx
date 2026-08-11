import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import DashboardCard from './components/DashboardCard'

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="layout">
        <Sidebar />

        <main className="main-content">
          <h1>Dashboard</h1>

          <p>Bine ai venit în Smart Home Dashboard!</p>

          <div className="dashboard-cards">

            <DashboardCard
              title="Temperature"
              value="22°C"
              icon="🌡️"
              description="Normal"
            />

            <DashboardCard
              title="Humidity"
              value="48%"
              icon="💧"
              description="Normal"
            />

            <DashboardCard
              title="Energy"
              value="6.8 kWh"
              icon="⚡"
              description="Today"
            />

          </div>
        </main>
      </div>
    </div>
  )
}

export default App