import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaTwitter, FaGithub, FaReddit, FaRegFileAlt } from 'react-icons/fa'
import millify from 'millify'
import DOMPurify from 'dompurify'
import parse from 'html-react-parser'

import { getCoinData, getCoinMarketChart, formatMarketData } from '../utils/api'
import LineChart from '../components/charts/LineChart'
import AreaChart from '../components/charts/AreaChart'

const CoinDetail = () => {
  const { id } = useParams()
  const [timeRange, setTimeRange] = useState(7) // Default to 7 days
  const [chartType, setChartType] = useState('line')
  
  // Fetch coin data
  const { data: coinData, isLoading: isDataLoading, error: dataError } = useQuery(
    ['coinData', id],
    () => getCoinData(id),
    { staleTime: 60000 } // 1 minute
  )
  
  // Fetch chart data
  const { data: chartData, isLoading: isChartLoading } = useQuery(
    ['coinChart', id, timeRange],
    () => getCoinMarketChart(id, timeRange),
    { staleTime: 60000 } // 1 minute
  )
  
  // Format chart data
  const formattedChartData = chartData ? formatMarketData(chartData.prices) : []
  
  // Handle errors
  if (dataError) {
    return (
      <div className="py-20">
        <div className="container-wrapper text-center">
          <h1 className="heading-2 mb-4">Coin Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The cryptocurrency you're looking for doesn't exist or couldn't be loaded.
          </p>
          <Link to="/dashboard" className="btn-primary">
            Return to Dashboard
          </Link>
        </div>
      </div>
    )
  }
  
  // Show loading state
  if (isDataLoading) {
    return (
      <div className="py-8">
        <div className="container-wrapper">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="card p-6 h-32"></div>
              <div className="card p-6 h-32 col-span-2"></div>
            </div>
            <div className="card p-6 h-[400px] mb-8"></div>
            <div className="card p-6 h-64"></div>
          </div>
        </div>
      </div>
    )
  }
  
  // Sanitize description HTML
  const sanitizedDescription = coinData?.description?.en ? 
    DOMPurify.sanitize(coinData.description.en, { USE_PROFILES: { html: true } }) : 
    ''
  
  // Calculate price change color
  const getPriceChangeColor = (priceChange) => {
    if (priceChange > 0) return 'text-success-600 dark:text-success-400'
    if (priceChange < 0) return 'text-error-600 dark:text-error-400'
    return 'text-gray-600 dark:text-gray-400'
  }

  return (
    <div className="py-8">
      <div className="container-wrapper">
        {coinData && (
          <>
            {/* Coin Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
              <div className="flex items-center mb-4 sm:mb-0">
                <img 
                  src={coinData.image.large} 
                  alt={coinData.name} 
                  className="w-10 h-10 mr-3"
                />
                <h1 className="heading-2">{coinData.name}</h1>
                <span className="ml-2 text-gray-500 dark:text-gray-400 text-xl uppercase">{coinData.symbol}</span>
                <span className="ml-3 text-xs bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                  Rank #{coinData.market_cap_rank}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {coinData.links?.homepage?.[0] && (
                  <a 
                    href={coinData.links.homepage[0]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm btn-outline"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Website
                  </a>
                )}
                
                {coinData.links?.twitter_screen_name && (
                  <a 
                    href={`https://twitter.com/${coinData.links.twitter_screen_name}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm btn-outline"
                  >
                    <FaTwitter className="mr-1" /> Twitter
                  </a>
                )}
                
                {coinData.links?.repos_url?.github?.[0] && (
                  <a 
                    href={coinData.links.repos_url.github[0]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm btn-outline"
                  >
                    <FaGithub className="mr-1" /> GitHub
                  </a>
                )}
                
                {coinData.links?.subreddit_url && (
                  <a 
                    href={coinData.links.subreddit_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm btn-outline"
                  >
                    <FaReddit className="mr-1" /> Reddit
                  </a>
                )}
              </div>
            </div>
            
            {/* Price and Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="card p-6">
                <h2 className="text-2xl font-bold mb-2">
                  ${coinData.market_data.current_price.usd.toLocaleString()}
                </h2>
                <div className={`text-sm font-medium mb-4 ${getPriceChangeColor(coinData.market_data.price_change_percentage_24h)}`}>
                  {coinData.market_data.price_change_percentage_24h > 0 ? '+' : ''}
                  {coinData.market_data.price_change_percentage_24h?.toFixed(2)}% (24h)
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Market Cap</p>
                    <p className="font-medium">${millify(coinData.market_data.market_cap.usd)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">Volume (24h)</p>
                    <p className="font-medium">${millify(coinData.market_data.total_volume.usd)}</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-500 dark:text-gray-400">Circulating Supply</p>
                    <p className="font-medium">{millify(coinData.market_data.circulating_supply)} {coinData.symbol.toUpperCase()}</p>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-500 dark:text-gray-400">Total Supply</p>
                    <p className="font-medium">
                      {coinData.market_data.total_supply 
                        ? `${millify(coinData.market_data.total_supply)} ${coinData.symbol.toUpperCase()}`
                        : 'N/A'
                      }
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card p-6 col-span-2">
                <h2 className="text-xl font-bold mb-4">Price Changes</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">1h</p>
                    <p className={`font-medium ${getPriceChangeColor(coinData.market_data.price_change_percentage_1h_in_currency.usd)}`}>
                      {coinData.market_data.price_change_percentage_1h_in_currency.usd > 0 ? '+' : ''}
                      {coinData.market_data.price_change_percentage_1h_in_currency.usd?.toFixed(2)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">24h</p>
                    <p className={`font-medium ${getPriceChangeColor(coinData.market_data.price_change_percentage_24h)}`}>
                      {coinData.market_data.price_change_percentage_24h > 0 ? '+' : ''}
                      {coinData.market_data.price_change_percentage_24h?.toFixed(2)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">7d</p>
                    <p className={`font-medium ${getPriceChangeColor(coinData.market_data.price_change_percentage_7d)}`}>
                      {coinData.market_data.price_change_percentage_7d > 0 ? '+' : ''}
                      {coinData.market_data.price_change_percentage_7d?.toFixed(2)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">30d</p>
                    <p className={`font-medium ${getPriceChangeColor(coinData.market_data.price_change_percentage_30d)}`}>
                      {coinData.market_data.price_change_percentage_30d > 0 ? '+' : ''}
                      {coinData.market_data.price_change_percentage_30d?.toFixed(2)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">1y</p>
                    <p className={`font-medium ${getPriceChangeColor(coinData.market_data.price_change_percentage_1y)}`}>
                      {coinData.market_data.price_change_percentage_1y > 0 ? '+' : ''}
                      {coinData.market_data.price_change_percentage_1y?.toFixed(2)}%
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Price Range (24h)</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Low</p>
                      <p className="font-medium">${coinData.market_data.low_24h.usd.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">High</p>
                      <p className="font-medium">${coinData.market_data.high_24h.usd.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Price Chart */}
            <div className="card p-6 mb-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h2 className="text-xl font-bold mb-2 sm:mb-0">Price Chart</h2>
                
                <div className="flex flex-wrap gap-2">
                  <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                    <button 
                      className={`px-3 py-1 text-sm ${timeRange === 1 ? 'bg-primary-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
                      onClick={() => setTimeRange(1)}
                    >
                      1D
                    </button>
                    <button 
                      className={`px-3 py-1 text-sm ${timeRange === 7 ? 'bg-primary-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
                      onClick={() => setTimeRange(7)}
                    >
                      7D
                    </button>
                    <button 
                      className={`px-3 py-1 text-sm ${timeRange === 30 ? 'bg-primary-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
                      onClick={() => setTimeRange(30)}
                    >
                      30D
                    </button>
                    <button 
                      className={`px-3 py-1 text-sm ${timeRange === 365 ? 'bg-primary-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
                      onClick={() => setTimeRange(365)}
                    >
                      1Y
                    </button>
                  </div>
                  
                  <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                    <button 
                      className={`px-3 py-1 text-sm ${chartType === 'line' ? 'bg-primary-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
                      onClick={() => setChartType('line')}
                    >
                      Line
                    </button>
                    <button 
                      className={`px-3 py-1 text-sm ${chartType === 'area' ? 'bg-primary-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}
                      onClick={() => setChartType('area')}
                    >
                      Area
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="h-[400px]">
                {isChartLoading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
                  </div>
                ) : formattedChartData.length > 0 ? (
                  chartType === 'line' ? (
                    <LineChart 
                      data={formattedChartData} 
                      title={`${coinData.name} Price Chart`} 
                      color={coinData.market_data.price_change_percentage_24h >= 0 ? '#22c55e' : '#ef4444'}
                    />
                  ) : (
                    <AreaChart 
                      data={formattedChartData} 
                      title={`${coinData.name} Price Chart`} 
                      color={coinData.market_data.price_change_percentage_24h >= 0 ? '#22c55e' : '#ef4444'}
                    />
                  )
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500 dark:text-gray-400">No chart data available</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Description and Info */}
            <div className="card p-6">
              <h2 className="text-xl font-bold mb-4">About {coinData.name}</h2>
              
              {sanitizedDescription ? (
                <div className="prose prose-sm max-w-none dark:prose-invert mb-6">
                  {parse(sanitizedDescription)}
                </div>
              ) : (
                <p className="text-gray-500 dark:text-gray-400 mb-6">No description available for this coin.</p>
              )}
              
              {/* Additional Links */}
              {(coinData.links?.whitepaper || coinData.links?.official_forum_url?.[0]) && (
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-3">Additional Resources</h3>
                  <div className="flex flex-wrap gap-3">
                    {coinData.links?.whitepaper && (
                      <a 
                        href={coinData.links.whitepaper} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm btn-outline"
                      >
                        <FaRegFileAlt className="mr-1" /> Whitepaper
                      </a>
                    )}
                    
                    {coinData.links?.official_forum_url?.[0] && (
                      <a 
                        href={coinData.links.official_forum_url[0]} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm btn-outline"
                      >
                        <FaExternalLinkAlt className="mr-1" /> Official Forum
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CoinDetail