import { motion } from 'framer-motion'

const StatCard = ({ title, value, icon, color = 'primary' }) => {
  // Define color classes
  const colorClasses = {
    primary: {
      bg: 'bg-primary-50 dark:bg-primary-900/20',
      border: 'border-primary-200 dark:border-primary-800',
      icon: 'text-primary-600 dark:text-primary-400',
    },
    secondary: {
      bg: 'bg-secondary-50 dark:bg-secondary-900/20',
      border: 'border-secondary-200 dark:border-secondary-800',
      icon: 'text-secondary-600 dark:text-secondary-400',
    },
    accent: {
      bg: 'bg-accent-50 dark:bg-accent-900/20',
      border: 'border-accent-200 dark:border-accent-800',
      icon: 'text-accent-600 dark:text-accent-400',
    },
    success: {
      bg: 'bg-success-50 dark:bg-success-900/20',
      border: 'border-success-200 dark:border-success-800',
      icon: 'text-success-600 dark:text-success-400',
    },
  }

  const classes = colorClasses[color] || colorClasses.primary

  return (
    <motion.div 
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`glass-card p-4 border ${classes.border}`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className={`p-2 rounded-lg ${classes.bg}`}>
          <span className={classes.icon}>{icon}</span>
        </div>
      </div>
      <h3 className="text-gray-600 dark:text-gray-400 text-sm">{title}</h3>
      <p className="text-xl font-semibold mt-1">{value}</p>
    </motion.div>
  )
}

export default StatCard