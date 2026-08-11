import DashboardCard from '../components/DashboardCard'
import DeviceCard from '../components/DeviceCard'
import EnergyChart from '../components/EnergyChart'

function Dashboard() {
  return (
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

      <div className="devices-section">
        <h2>Devices</h2>

        <div className="device-cards">

          <DeviceCard
            name="Living Light"
            icon="💡"
            type="Light"
          />

          <DeviceCard
            name="Bedroom Light"
            icon="💡"
            type="Light"
          />

          <DeviceCard
            name="Front Door"
            icon="🚪"
            type="Security"
          />

        </div>
      </div>

      <EnergyChart />
    </main>
  )
}

export default Dashboard