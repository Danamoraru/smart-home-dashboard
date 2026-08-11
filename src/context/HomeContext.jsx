import { createContext, useContext, useState } from 'react'
import homeData from '../data/homeData'

const HomeContext = createContext()

export function HomeProvider({ children }) {
  const [devices, setDevices] = useState(
    homeData.devices.map((device) => ({
      ...device,
      isActive: false
    }))
  )

  const toggleDevice = (id) => {
    setDevices((currentDevices) =>
      currentDevices.map((device) =>
        device.id === id
          ? { ...device, isActive: !device.isActive }
          : device
      )
    )
  }

  return (
    <HomeContext.Provider value={{ devices, toggleDevice }}>
      {children}
    </HomeContext.Provider>
  )
}

export function useHome() {
  return useContext(HomeContext)
}