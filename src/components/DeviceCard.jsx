import { useHome } from '../context/HomeContext'

function DeviceCard({ id, name, icon, type }) {
  const { devices, toggleDevice } = useHome()

  const device = devices.find((device) => device.id === id)

  const isActive = device?.isActive ?? false

  const getStatus = () => {
    if (type === 'Door') {
      return isActive ? '🔓 Unlocked' : '🔒 Locked'
    }

    if (type === 'Camera') {
      return isActive ? '🟢 Online' : '🔴 Offline'
    }

    if (type === 'Alarm') {
      return isActive ? '🚨 Active' : '🟢 Inactive'
    }

    return isActive ? '🟢 ON' : '🔴 OFF'
  }

  const getButtonText = () => {
    if (type === 'Door') {
      return isActive ? 'Lock' : 'Unlock'
    }

    if (type === 'Camera') {
      return isActive ? 'Turn off' : 'Turn on'
    }

    if (type === 'Alarm') {
      return isActive ? 'Deactivate' : 'Activate'
    }

    return isActive ? 'Turn off' : 'Turn on'
  }

  return (
    <div className="device-card">
      <div className="device-icon">
        {icon}
      </div>

      <h3>{name}</h3>

      <p>{type}</p>

      <p>{getStatus()}</p>

      <button onClick={() => toggleDevice(id)}>
        {getButtonText()}
      </button>
    </div>
  )
}

export default DeviceCard