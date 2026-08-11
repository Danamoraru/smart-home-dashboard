import DeviceCard from '../components/DeviceCard'
import homeData from '../data/homeData'

function Security() {
  const securityDevices = homeData.devices.filter(
    (device) =>
      device.type === 'Door' ||
      device.type === 'Camera' ||
      device.type === 'Alarm'
  )

  return (
    <main className="main-content">
      <h1>Security</h1>

      <p>
        Monitorizarea securității locuinței.
      </p>

      <div className="device-cards">

        {securityDevices.map((device) => (
          <DeviceCard
            key={device.id}
            id={device.id}
            name={device.name}
            icon={device.icon}
            type={device.type}
          />
        ))}

      </div>
    </main>
  )
}

export default Security