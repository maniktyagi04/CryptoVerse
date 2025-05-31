import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { getTopCoins, getCoinMarketChart, formatMarketData, getSupportedCurrencies } from '../utils/api'
import LineChart from '../components/charts/LineChart'
import AreaChart from '../components/charts/AreaChart'
import BarChart from '../components/charts/BarChart'

const LiveCharts = () => {
  // State for chart options
  const [selectedCoin, setSelectedCoin] = useState('bitcoin')
  const [timeRange, setTimeRange] = useState(1) // Days
  const [currency, setCurrency] = useState('usd')
  const [chartType, setChartType] = useState('line')
  const [autoRefresh, setAutoRefresh] = useState(false)
  
  // Fetch top coins for dropdown
  const { data: coinsData } = useQuery(
    'chartCoins',
    () => getTopCoins(1, 50, 'usd'),
    { staleTime: 300000 } // 5 minutes
  )
  
  // Fetch supported currencies
  const { data: currencies } = useQuery(
    'currencies',
    getSupportedCurrencies,
    { staleTime: 3600000 } // 1 hour
  )
  
  // Fetch chart data
  const { data: chartData, refetch: refetchChartData, isLoading } = useQuery(
    ['chartData', selectedCoin, timeRange, currency],
    () => getCoinMarketChart(selectedCoin, timeRange, currency),
    { 
      staleTime: 60000, // 1 minute
      refetchInterval: autoRefresh ? 10000 : false // Refresh every 10 seconds if enabled
    }
  )
  
  // Format chart data
  const formattedData = chartData ? formatMarketData(chartData.prices) : []
  
  // Auto-refresh handler
  useEffect(() => {
    let interval
    if (autoRefresh) {
      interval = setInterval(() => {
        refetchChartData()
      }, 10000) // 10 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoRefresh, refetchChartData])
  
  // Render the selected chart type
  const renderChart = () => {
    const chartTitle = `${selectedCoin.charAt(0).toUpperCase() + selectedCoin.slice(1)} Price Chart (${timeRange}D)`
    
    switch(chartType) {
      case 'line':
        return <LineChart data={formattedData} title={chartTitle} />
      case 'area':
        return <AreaChart data={formattedData} title={chartTitle} />
      case 'bar':
        return <BarChart 
          data={formattedData.filter((_, i) => i % Math.ceil(formattedData.length / 30) === 0)} 
          title={chartTitle} 
          dataKey="value" 
        />
      default:
        return <LineChart data={formattedData} title={chartTitle} />
    }
  }

  return (
    <div className="py-8">
      <div className="container-wrapper">
        <h1 className="heading-2 mb-6">Live Detailed Charts</h1>
        
        {/* Chart Controls */}
        <div className="card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Coin Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Select Coin
              </label>
              <select
                value={selectedCoin}
                onChange={(e) => setSelectedCoin(e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {coinsData?.map(coin => (
                  <option key={coin.id} value={coin.id}>
                    {coin.name} ({coin.symbol.toUpperCase()})
                  </option>
                ))}
              </select>
            </div>
            
            {/* Time Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Time Range
              </label>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value={1}>1 Day</option>
                <option value={7}>7 Days</option>
                <option value={30}>30 Days</option>
                <option value={90}>90 Days</option>
                <option value={365}>1 Year</option>
                <option value={1825}>5 Years</option>
              </select>
            </div>
            
            {/* Currency */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Currency
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {currencies?.map(curr => (
                  <option key={curr} value={curr}>
                    {curr.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Chart Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Chart Type
              </label>
              <select
                value={chartType}
                onChange={(e) => setChartType(e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="line">Line Chart</option>
                <option value="area">Area Chart</option>
                <option value="bar">Bar Chart</option>
              </select>
            </div>
            
            {/* Auto Refresh */}
            <div className="flex items-end">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={autoRefresh}
                  onChange={() => setAutoRefresh(!autoRefresh)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 h-4 w-4"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Auto-refresh (10s)
                </span>
              </label>
            </div>
          </div>
        </div>
        
        {/* Chart Display */}
        <div className="card p-4 h-[500px]">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
            </div>
          ) : formattedData.length > 0 ? (
            renderChart()
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 dark:text-gray-400">No data available for the selected options</p>
            </div>
          )}
        </div>
        
        {/* Chart Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">Reading Price Charts</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Price charts show the historical price movement of a cryptocurrency over time. 
              Look for patterns like support and resistance levels, trends, and market cycles to inform your decisions.
            </p>
          </div>
          
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">Chart Patterns</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Common patterns include head and shoulders, double tops/bottoms, triangles, and flags. 
              These patterns can signal potential price movements and reversals.
            </p>
          </div>
          
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">Time Frames</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Different time frames offer different perspectives. Shorter time frames (1D, 7D) show recent price action, 
              while longer periods (30D, 1Y) reveal long-term trends and market cycles.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveCharts