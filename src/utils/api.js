import axios from 'axios'

// Base URLs
const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3'

// Create axios instance with default config
const api = axios.create({
  baseURL: COINGECKO_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Get global crypto data
export const getGlobalData = async () => {
  try {
    const response = await api.get('/global')
    return response.data
  } catch (error) {
    console.error('Error fetching global data:', error)
    throw error
  }
}

// Get trending coins
export const getTrendingCoins = async () => {
  try {
    const response = await api.get('/search/trending')
    return response.data
  } catch (error) {
    console.error('Error fetching trending coins:', error)
    throw error
  }
}

// Get top coins by market cap
export const getTopCoins = async (page = 1, perPage = 10, currency = 'usd') => {
  try {
    const response = await api.get('/coins/markets', {
      params: {
        vs_currency: currency,
        order: 'market_cap_desc',
        per_page: perPage,
        page: page,
        sparkline: false,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error fetching top coins:', error)
    throw error
  }
}

// Get specific coin data
export const getCoinData = async (id) => {
  try {
    const response = await api.get(`/coins/${id}`, {
      params: {
        localization: false,
        tickers: false,
        market_data: true,
        community_data: false,
        developer_data: false,
      },
    })
    return response.data
  } catch (error) {
    console.error(`Error fetching data for coin ${id}:`, error)
    throw error
  }
}

// Get coin market chart data
export const getCoinMarketChart = async (id, days = 1, currency = 'usd') => {
  try {
    const response = await api.get(`/coins/${id}/market_chart`, {
      params: {
        vs_currency: currency,
        days: days,
      },
    })
    return response.data
  } catch (error) {
    console.error(`Error fetching market chart for coin ${id}:`, error)
    throw error
  }
}

// Search for coins
export const searchCoins = async (query) => {
  try {
    const response = await api.get('/search', {
      params: {
        query: query,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error searching coins:', error)
    throw error
  }
}

// Get supported currencies
export const getSupportedCurrencies = async () => {
  try {
    const response = await api.get('/simple/supported_vs_currencies')
    return response.data
  } catch (error) {
    console.error('Error fetching supported currencies:', error)
    throw error
  }
}

// Format market data
export const formatMarketData = (data) => {
  return data.map(point => ({
    time: new Date(point[0]),
    value: point[1],
  }))
}

export default api