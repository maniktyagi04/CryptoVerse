import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-2 rounded shadow text-sm">
        <p className="font-semibold">{new Date(label).toLocaleDateString()}</p>
        <p className="text-gray-700 dark:text-gray-300">${payload[0].value.toLocaleString()}</p>
      </div>
    )
  }

  return null
}

const AreaChart = ({ data, title, dataKey = "value", color = "#6366f1" }) => {
  return (
    <div className="card h-[300px] p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart
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
            dataKey="time" 
            tick={{ fontSize: 12 }} 
            tickFormatter={time => new Date(time).toLocaleDateString()}
            tickLine={false}
            axisLine={{ stroke: '#374151', opacity: 0.1 }}
          />
          <YAxis 
            tick={{ fontSize: 12 }} 
            tickFormatter={value => `$${value.toLocaleString()}`}
            tickLine={false}
            axisLine={{ stroke: '#374151', opacity: 0.1 }}
            domain={['auto', 'auto']}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend formatter={(value) => <span className="text-xs">{value}</span>} />
          <Area 
            type="monotone" 
            dataKey={dataKey} 
            name="Price" 
            stroke={color} 
            fill={color}
            fillOpacity={0.2}
            strokeWidth={2}
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AreaChart