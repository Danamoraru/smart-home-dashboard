import DeviceCard from '../components/DeviceCard'

function Devices() {
  return (
    <main className="main-content">
      <h1>Devices</h1>

      <p>Monitorizează și controlează dispozitivele locuinței.</p>

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
    </main>
  )
}

export default Devices