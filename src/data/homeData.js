const homeData = {
  temperature: {
    value: 22.5,
    unit: '°C',
    status: 'Normal'
  },

  humidity: {
    value: 48,
    unit: '%',
    status: 'Normal'
  },

  energy: {
    value: 6.8,
    unit: 'kWh',
    status: 'Today'
  },

  devices: [
    {
      id: 1,
      name: 'Living Light',
      icon: '💡',
      type: 'Light'
    },
    {
      id: 2,
      name: 'Bedroom Light',
      icon: '💡',
      type: 'Light'
    },
    {
      id: 3,
      name: 'Front Door',
      icon: '🚪',
      type: 'Door'
    },
  {
    id: 4,
    name: 'Kitchen Light',
    icon: '💡',
    type: 'Light'
  },  
  {
    id: 5,
    name: 'Security Camera',
    icon: '📹',
    type: 'Camera'
  }, 
  {
    id: 6,
    name: 'Alarm',
    icon: '🚨',
    type: 'Alarm'
  }
  ]
}

export default homeData