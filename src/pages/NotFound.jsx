import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHome, FaChartLine } from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12">
      <div className="text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400">404</h1>
          <h2 className="text-3xl font-bold mt-4 mb-6">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-primary flex items-center">
              <FaHome className="mr-2" /> Back to Home
            </Link>
            <Link to="/dashboard" className="btn-outline flex items-center">
              <FaChartLine className="mr-2" /> Explore Dashboard
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound