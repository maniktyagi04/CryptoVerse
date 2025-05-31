import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import millify from 'millify'

const CryptoCard = ({ coin, rank }) => {
  // Calculate price change color
  const getPriceChangeColor = (priceChange) => {
    if (priceChange > 0) return 'text-success-600'
    if (priceChange < 0) return 'text-error-600'
    return 'text-gray-600 dark:text-gray-400'
  }

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="card p-4"
    >
      <Link to={`/coin/${coin.id}`} className="block">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-2">#{rank}</span>
            <img src={coin.image} alt={coin.name} className="w-8 h-8 mr-2 rounded-full" />
            <h3 className="font-semibold">{coin.name}</h3>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">{coin.symbol}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Price</p>
            <p className="font-medium">${coin.current_price.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">24h Change</p>
            <p className={`font-medium ${getPriceChangeColor(coin.price_change_percentage_24h)}`}>
              {coin.price_change_percentage_24h > 0 ? '+' : ''}
              {coin.price_change_percentage_24h?.toFixed(2)}%
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Market Cap</p>
            <p className="font-medium">${millify(coin.market_cap)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Volume (24h)</p>
            <p className="font-medium">${millify(coin.total_volume)}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default CryptoCard