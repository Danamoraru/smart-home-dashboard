import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const data = [
  { day: 'Mon', energy: 5.2 },
  { day: 'Tue', energy: 6.1 },
  { day: 'Wed', energy: 7.3 },
  { day: 'Thu', energy: 6.5 },
  { day: 'Fri', energy: 5.8 },
  { day: 'Sat', energy: 7.8 },
  { day: 'Sun', energy: 6.9 }
]

function EnergyChart() {
  return (
    <div className="energy-chart">
      <h2>Energy Consumption</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="energy"
            stroke="#4f8cff"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default EnergyChart