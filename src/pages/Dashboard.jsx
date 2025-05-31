import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { FaCoins, FaChartLine, FaBitcoin, FaDollarSign } from 'react-icons/fa'
import { getTopCoins, getGlobalData } from '../utils/api'
import millify from 'millify'

// Components
import CryptoCard from '../components/dashboard/CryptoCard'
import StatCard from '../components/dashboard/StatCard'
import PieChart from '../components/charts/PieChart'
import BarChart from '../components/charts/BarChart'

const Dashboard = () => {
  const [filter, setFilter] = useState('market_cap')
  const [currency, setCurrency] = useState('usd')
  
  // Fetch top coins
  const { data: coinsData, isLoading: isCoinsLoading } = useQuery(
    ['topCoins', currency],
    () => getTopCoins(1, 100, currency),
    { staleTime: 30000 } // 30 seconds
  )
  
  // Fetch global data
  const { data: globalData, isLoading: isGlobalLoading } = useQuery(
    'globalData',
    getGlobalData,
    { staleTime: 60000 } // 60 seconds
  )
  
  // Filter and sort coins
  const filteredCoins = () => {
    if (!coinsData) return []
    
    let filtered = [...coinsData]
    
    switch(filter) {
      case 'market_cap':
        filtered.sort((a, b) => b.market_cap - a.market_cap)
        break
      case 'volume':
        filtered.sort((a, b) => b.total_volume - a.total_volume)
        break
      case 'gainers':
        filtered.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
        break
      case 'losers':
        filtered.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
        break
      default:
        break
    }
    
    return filtered.slice(0, 10)
  }
  
  // Prepare pie chart data for market dominance
  const prepareDominanceData = () => {
    if (!globalData?.data) return []
    
    const dominanceData = []
    const marketCapPercentages = globalData.data.market_cap_percentage
    
    Object.keys(marketCapPercentages).forEach(key => {
      if (marketCapPercentages[key] > 1) {
        dominanceData.push({
          name: key.toUpperCase(),
          value: marketCapPercentages[key]
        })
      }
    })
    
    // Add "Others" for the rest
    const othersPercentage = 100 - dominanceData.reduce((acc, item) => acc + item.value, 0)
    if (othersPercentage > 0) {
      dominanceData.push({
        name: 'Others',
        value: othersPercentage
      })
    }
    
    return dominanceData
  }
  
  // Prepare bar chart data for top market caps
  const prepareMarketCapData = () => {
    if (!coinsData) return []
    
    return coinsData.slice(0, 10).map(coin => ({
      name: coin.symbol.toUpperCase(),
      marketCap: coin.market_cap
    }))
  }

  return (
    <div className="py-8">
      <div className="container-wrapper">
        <h1 className="heading-2 mb-6">Cryptocurrency Dashboard</h1>
        
        {/* Global Stats Cards */}
        {isGlobalLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="glass-card p-4 border animate-pulse h-24">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : globalData?.data ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              title="Global Market Cap" 
              value={`$${millify(globalData.data.total_market_cap.usd)}`} 
              icon={<FaDollarSign />} 
              color="primary"
            />
            <StatCard 
              title="24h Volume" 
              value={`$${millify(globalData.data.total_volume.usd)}`} 
              icon={<FaChartLine />} 
              color="secondary"
            />
            <StatCard 
              title="BTC Dominance" 
              value={`${globalData.data.market_cap_percentage.btc.toFixed(2)}%`} 
              icon={<FaBitcoin />} 
              color="accent"
            />
            <StatCard 
              title="Active Cryptocurrencies" 
              value={globalData.data.active_cryptocurrencies.toLocaleString()} 
              icon={<FaCoins />} 
              color="success"
            />
          </div>
        ) : null}
        
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <PieChart 
            data={prepareDominanceData()} 
            title="Market Dominance" 
          />
          <BarChart 
            data={prepareMarketCapData()} 
            title="Top 10 Market Caps" 
            dataKey="marketCap" 
          />
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-semibold">Top Cryptocurrencies</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <button 
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${filter === 'market_cap' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
              onClick={() => setFilter('market_cap')}
            >
              Market Cap
            </button>
            <button 
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${filter === 'volume' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
              onClick={() => setFilter('volume')}
            >
              Volume
            </button>
            <button 
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${filter === 'gainers' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
              onClick={() => setFilter('gainers')}
            >
              Top Gainers
            </button>
            <button 
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${filter === 'losers' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
              onClick={() => setFilter('losers')}
            >
              Top Losers
            </button>
          </div>
        </div>
        
        {/* Cryptocurrency List */}
        {isCoinsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="card p-4 animate-pulse">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full mr-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                  </div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-10"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i}>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16 mb-1"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCoins().map((coin, index) => (
              <CryptoCard key={coin.id} coin={coin} rank={index + 1} />
            ))}
          </div>
        )}
        
      </div>
    </div>
  )
}

export default Dashboard