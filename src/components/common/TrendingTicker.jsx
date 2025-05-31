import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getTrendingCoins } from '../../utils/api'
import { motion } from 'framer-motion'

const TrendingTicker = () => {
  const [index, setIndex] = useState(0)
  const { data: trendingData, isLoading, isError } = useQuery('trending', getTrendingCoins)

  // Auto-scroll ticker
  useEffect(() => {
    if (!isLoading && !isError && trendingData?.coins?.length > 0) {
      const interval = setInterval(() => {
        setIndex(prevIndex => 
          prevIndex === trendingData.coins.length - 1 ? 0 : prevIndex + 1
        )
      }, 3000)
      
      return () => clearInterval(interval)
    }
  }, [isLoading, isError, trendingData])

  if (isLoading) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 py-1 overflow-hidden">
        <div className="container-wrapper">
          <div className="flex items-center">
            <div className="mr-2 text-xs bg-primary-600 text-white px-2 py-0.5 rounded">TRENDING</div>
            <p className="text-sm">Loading trending coins...</p>
          </div>
        </div>
      </div>
    )
  }

  if (isError || !trendingData?.coins) {
    return null
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-1 overflow-hidden">
      <div className="container-wrapper">
        <div className="flex items-center">
          <div className="mr-2 text-xs bg-primary-600 text-white px-2 py-0.5 rounded">TRENDING</div>
          <div className="relative h-6 overflow-hidden flex-1">
            {trendingData.coins.map((item, i) => (
              <motion.div
                key={item.item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: index === i ? 1 : 0,
                  y: index === i ? 0 : 20
                }}
                transition={{ duration: 0.3 }}
                className={`absolute w-full flex items-center ${index === i ? 'block' : 'hidden'}`}
              >
                <Link to={`/coin/${item.item.id}`} className="flex items-center hover:text-primary-600 dark:hover:text-primary-400">
                  <img 
                    src={item.item.small} 
                    alt={item.item.name} 
                    className="w-5 h-5 mr-2 rounded-full"
                  />
                  <span className="text-sm font-medium mr-1">{item.item.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">${item.item.price_btc.toFixed(8)} BTC</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingTicker