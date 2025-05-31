import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFileDownload } from 'react-icons/fa'

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="py-8">
      <div className="container-wrapper">
        <h1 className="heading-2 mb-6">About CryptoVerse</h1>
        
        {/* About Section */}
        <div className="card p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                At CryptoVerse, our mission is to demystify the complex world of cryptocurrency and make 
                it accessible to everyone. We believe that financial freedom and knowledge should be available 
                to all, regardless of background or experience level.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We provide real-time data, comprehensive educational resources, and intuitive tools to help 
                you navigate the cryptocurrency landscape with confidence. Our platform is designed to be 
                user-friendly while offering deep insights for more experienced users.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Whether you're a beginner just starting your crypto journey or an experienced trader looking 
                for detailed analysis, CryptoVerse is your trusted companion in the exciting world of digital assets.
              </p>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Why Choose CryptoVerse?</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                  <li><strong>Comprehensive Data:</strong> Real-time pricing and market information for thousands of cryptocurrencies</li>
                  <li><strong>Interactive Charts:</strong> Customizable charts with multiple timeframes and visualization options</li>
                  <li><strong>Educational Resources:</strong> In-depth guides and tutorials for all knowledge levels</li>
                  <li><strong>Intuitive Interface:</strong> Clean, user-friendly design that makes navigation simple</li>
                  <li><strong>Responsive Design:</strong> Optimized for all devices, from mobile to desktop</li>
                </ul>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-md h-full bg-gradient-to-br from-primary-900 to-secondary-900 p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-4">Powered By</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">CoinGecko API</h4>
                    <p className="text-sm text-gray-200">
                      We use the CoinGecko API to provide accurate and up-to-date cryptocurrency data.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">React</h4>
                    <p className="text-sm text-gray-200">
                      Built with React for a smooth, responsive user experience.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Tailwind CSS</h4>
                    <p className="text-sm text-gray-200">
                      Styled with Tailwind CSS for a beautiful, consistent design.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Recharts</h4>
                    <p className="text-sm text-gray-200">
                      Visualizes data with Recharts for interactive, informative charts.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h4 className="font-semibold mb-2">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-300 transition duration-200">
                      <FaGithub size={24} />
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-300 transition duration-200">
                      <FaLinkedin size={24} />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-300 transition duration-200">
                      <FaTwitter size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ y: -5 }}
              className="card p-6 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Alex Johnson</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Founder & Lead Developer</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Blockchain enthusiast with 5+ years of experience in developing fintech solutions.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
                  <FaGithub size={18} />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
                  <FaLinkedin size={18} />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
                  <FaTwitter size={18} />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="card p-6 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Sarah Chen</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Financial Analyst & Content Lead</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Former investment banker with a passion for cryptocurrency and financial education.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
                  <FaGithub size={18} />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
                  <FaLinkedin size={18} />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
                  <FaTwitter size={18} />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="card p-6 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Miguel Rodriguez</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">UX Designer & Frontend Developer</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Creates intuitive user experiences with a focus on accessibility and clean design.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
                  <FaGithub size={18} />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
                  <FaLinkedin size={18} />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400">
                  <FaTwitter size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="card p-6">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Have questions, suggestions, or feedback? We'd love to hear from you! Fill out the form, 
                and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-center">
                  <FaEnvelope className="text-primary-600 dark:text-primary-400 mr-3" />
                  <span className="text-gray-600 dark:text-gray-400">contact@cryptoverse.example.com</span>
                </div>
                <div className="flex items-center">
                  <FaGithub className="text-primary-600 dark:text-primary-400 mr-3" />
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">
                    github.com/cryptoverse
                  </a>
                </div>
                <div className="flex items-center">
                  <FaFileDownload className="text-primary-600 dark:text-primary-400 mr-3" />
                  <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">
                    Download Press Kit
                  </a>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h3 className="font-semibold mb-2">Join Our Newsletter</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Stay updated with the latest crypto news, market trends, and feature updates.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow px-3 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <button className="bg-primary-600 hover:bg-primary-700 text-white rounded-r-lg px-4 py-2 text-sm transition duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg transition duration-200 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 p-3 bg-success-50 dark:bg-success-900/20 text-success-700 dark:text-success-400 rounded-lg text-sm">
                    Your message has been sent successfully! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About