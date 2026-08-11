import { useState } from 'react'

function DeviceCard({ name, icon, type }) {
  const [isActive, setIsActive] = useState(false)

  const getStatus = () => {
    if (type === 'Security') {
      return isActive ? '🔓 Unlocked' : '🔒 Locked'
    }

    return isActive ? '🟢 ON' : '🔴 OFF'
  }

  const getButtonText = () => {
    if (type === 'Security') {
      return isActive ? 'Lock' : 'Unlock'
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

      <button onClick={() => setIsActive(!isActive)}>
        {getButtonText()}
      </button>
    </div>
  )
}

export default DeviceCard