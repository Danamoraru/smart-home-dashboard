import { useHome } from '../context/HomeContext'
import DashboardCard from '../components/DashboardCard'
import DeviceCard from '../components/DeviceCard'
import EnergyChart from '../components/EnergyChart'
import homeData from '../data/homeData'

function Dashboard() {
  const { devices } = useHome()

  const activeDevices = devices.filter(
    (device) => device.isActive
  ).length

  const frontDoor = devices.find(
    (device) => device.type === 'Door'
  )

  return (
    <main className="main-content">

      <h1>Dashboard</h1>

      <p>
        Bine ai venit în Smart Home Dashboard!
      </p>

      {/* Home Status */}
      <div className="home-status">

        <div className="status-item">
          <span>🏠</span>

          <div>
            <p>Active devices</p>
            <strong>{activeDevices}</strong>
          </div>
        </div>

        <div className="status-item">
          <span>🚪</span>

          <div>
            <p>Front Door</p>

            <strong>
              {frontDoor?.isActive
                ? '🔓 Unlocked'
                : '🔒 Locked'}
            </strong>
          </div>
        </div>

        <div className="status-item">
          <span>⚡</span>

          <div>
            <p>Energy today</p>

            <strong>
              {homeData.energy.value} {homeData.energy.unit}
            </strong>
          </div>
        </div>

      </div>

      {/* Dashboard Cards */}
      <div className="dashboard-cards">

        <DashboardCard
          title="Temperature"
          value={`${homeData.temperature.value}${homeData.temperature.unit}`}
          icon="🌡️"
          description={homeData.temperature.status}
        />

        <DashboardCard
          title="Humidity"
          value={`${homeData.humidity.value}${homeData.humidity.unit}`}
          icon="💧"
          description={homeData.humidity.status}
        />

        <DashboardCard
          title="Energy"
          value={`${homeData.energy.value} ${homeData.energy.unit}`}
          icon="⚡"
          description={homeData.energy.status}
        />

      </div>

      {/* Devices */}
      <div className="devices-section">

        <h2>Devices</h2>

        <div className="device-cards">

          {homeData.devices.map((device) => (
            <DeviceCard
              key={device.id}
              id={device.id}
              name={device.name}
              icon={device.icon}
              type={device.type}
            />
          ))}

        </div>

      </div>

      {/* Energy Chart */}
      <EnergyChart />

    </main>
  )
}

export default Dashboard