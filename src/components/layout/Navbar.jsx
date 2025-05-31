import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaSun, FaMoon, FaBars, FaTimes, FaSearch } from 'react-icons/fa'

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Check if we're scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/coin/${searchQuery.toLowerCase().trim()}`)
      setSearchQuery('')
    }
  }

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-wrapper py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-xl sm:text-2xl font-bold text-gradient"
            >
              CryptoVerse
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition duration-200 hover:text-primary-600 dark:hover:text-primary-400 ${location.pathname === '/' ? 'text-primary-600 dark:text-primary-400' : ''}`}>
              Home
            </Link>
            <Link to="/dashboard" className={`font-medium transition duration-200 hover:text-primary-600 dark:hover:text-primary-400 ${location.pathname === '/dashboard' ? 'text-primary-600 dark:text-primary-400' : ''}`}>
              Dashboard
            </Link>
            <Link to="/charts" className={`font-medium transition duration-200 hover:text-primary-600 dark:hover:text-primary-400 ${location.pathname === '/charts' ? 'text-primary-600 dark:text-primary-400' : ''}`}>
              Charts
            </Link>
            <Link to="/learn" className={`font-medium transition duration-200 hover:text-primary-600 dark:hover:text-primary-400 ${location.pathname === '/learn' ? 'text-primary-600 dark:text-primary-400' : ''}`}>
              Learn
            </Link>
            <Link to="/about" className={`font-medium transition duration-200 hover:text-primary-600 dark:hover:text-primary-400 ${location.pathname === '/about' ? 'text-primary-600 dark:text-primary-400' : ''}`}>
              About
            </Link>
          </div>

          {/* Search & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search coins..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="py-2 pl-3 pr-10 w-44 lg:w-64 rounded-lg text-sm bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition duration-200"
              />
              <button 
                type="submit" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <FaSearch />
              </button>
            </form>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-200"
              aria-label="Open menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="container-wrapper py-4 px-4 space-y-6 bg-white dark:bg-gray-900">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search coins..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-2 pl-3 pr-10 w-full rounded-lg text-sm bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button 
              type="submit" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <FaSearch />
            </button>
          </form>

          <div className="flex flex-col space-y-4">
            <Link to="/" className={`font-medium transition duration-200 hover:text-primary-600 dark:hover:text-primary-400 ${location.pathname === '/' ? 'text-primary-600 dark:text-primary-400' : ''}`}>
              Home
            </Link>
            <Link to="/dashboard" className={`font-medium transition duration-200 hover:text-primary-600 dark:hover:text-primary-400 ${location.pathname === '/dashboard' ? 'text-primary-600 dark:text-primary-400' : ''}`}>
              Dashboard
            </Link>
            <Link to="/charts" className={`font-medium transition duration-200 hover:text-primary-600 dark:hover:text-primary-400 ${location.pathname === '/charts' ? 'text-primary-600 dark:text-primary-400' : ''}`}>
              Charts
            </Link>
            <Link to="/learn" className={`font-medium transition duration-200 hover:text-primary-600 dark:hover:text-primary-400 ${location.pathname === '/learn' ? 'text-primary-600 dark:text-primary-400' : ''}`}>
              Learn
            </Link>
            <Link to="/about" className={`font-medium transition duration-200 hover:text-primary-600 dark:hover:text-primary-400 ${location.pathname === '/about' ? 'text-primary-600 dark:text-primary-400' : ''}`}>
              About
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar