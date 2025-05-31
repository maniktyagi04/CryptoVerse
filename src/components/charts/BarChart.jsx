import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-2 rounded shadow text-sm">
        <p className="font-semibold">{label}</p>
        <p className="text-gray-700 dark:text-gray-300">{`${payload[0].name}: $${payload[0].value.toLocaleString()}`}</p>
      </div>
    )
  }

  return null
}

const BarChart = ({ data, title, dataKey, color = "#6366f1" }) => {
  return (
    <div className="card h-[300px] p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }} 
            tickLine={false}
            axisLine={{ stroke: '#374151', opacity: 0.1 }}
          />
          <YAxis 
            tick={{ fontSize: 12 }} 
            tickFormatter={value => `$${value.toLocaleString()}`}
            tickLine={false}
            axisLine={{ stroke: '#374151', opacity: 0.1 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend formatter={(value) => <span className="text-xs">{value}</span>} />
          <Bar 
            dataKey={dataKey} 
            name="Market Cap" 
            fill={color} 
            radius={[4, 4, 0, 0]} 
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarChart