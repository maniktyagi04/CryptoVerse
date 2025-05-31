import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaChartLine, FaGraduationCap, FaChartPie, FaSearch } from 'react-icons/fa'
import TrendingTicker from '../components/common/TrendingTicker'

const Home = () => {
  return (
    <>
      <TrendingTicker />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-10 bg-cover bg-center"></div>
        
        <div className="container-wrapper relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="heading-1 mb-6"
              >
                Welcome to the world of crypto, where innovation meets investment.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-200 mb-8"
              >
                Stay informed with real-time market data, in-depth analysis, and educational resources to navigate the cryptocurrency landscape with confidence.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/dashboard" className="btn-primary">
                  Explore Dashboard
                </Link>
                <Link to="/learn" className="btn-outline bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Learn More
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden lg:block"
            >
              <img 
                src="https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cryptocurrency" 
                className="w-full max-w-md mx-auto rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container-wrapper">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Powerful Features</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to stay informed and make data-driven decisions in the fast-paced world of cryptocurrency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="card p-6"
            >
              <div className="mb-4 text-primary-600 dark:text-primary-400">
                <FaChartLine size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Data</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access up-to-the-minute price movements, market capitalization, and trading volume for thousands of cryptocurrencies.
              </p>
              <Link to="/dashboard" className="mt-4 inline-block text-primary-600 dark:text-primary-400 font-medium hover:underline">
                View Dashboard
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="card p-6"
            >
              <div className="mb-4 text-secondary-600 dark:text-secondary-400">
                <FaChartPie size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Charts</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Visualize price trends with customizable charts offering multiple timeframes and indicators for technical analysis.
              </p>
              <Link to="/charts" className="mt-4 inline-block text-secondary-600 dark:text-secondary-400 font-medium hover:underline">
                Explore Charts
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="card p-6"
            >
              <div className="mb-4 text-accent-500 dark:text-accent-400">
                <FaSearch size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Insights</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Dive deep into specific cryptocurrencies with comprehensive information on technology, team, development activity, and more.
              </p>
              <Link to="/dashboard" className="mt-4 inline-block text-accent-500 dark:text-accent-400 font-medium hover:underline">
                Research Coins
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="card p-6"
            >
              <div className="mb-4 text-success-600 dark:text-success-400">
                <FaGraduationCap size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn the fundamentals of blockchain technology, cryptocurrency investing, and trading strategies through our comprehensive guides.
              </p>
              <Link to="/learn" className="mt-4 inline-block text-success-600 dark:text-success-400 font-medium hover:underline">
                Start Learning
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-900 to-primary-900 text-white">
        <div className="container-wrapper text-center">
          <h2 className="heading-2 mb-6">Ready to dive into the world of cryptocurrency?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Whether you're a seasoned investor or just getting started, our platform provides all the tools and resources you need to navigate the crypto market with confidence.
          </p>
          <Link to="/dashboard" className="btn-accent">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home