import { motion } from 'framer-motion'
import { FaBitcoin, FaChartLine, FaLock, FaExchangeAlt, FaGraduationCap } from 'react-icons/fa'

const Learn = () => {
  return (
    <div className="py-8">
      <div className="container-wrapper">
        <h1 className="heading-2 mb-6">Learn About Cryptocurrency</h1>
        
        {/* Introduction Section */}
        <div className="card p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Welcome to Your Crypto Learning Journey</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Whether you're just getting started or looking to deepen your understanding, 
                our educational resources are designed to help you navigate the world of cryptocurrency 
                with confidence and knowledge.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Explore the fundamentals, learn how to read charts, understand blockchain technology, 
                and discover best practices for secure investing.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Cryptocurrency Learning" 
                className="w-full rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
        
        {/* What is Crypto Section */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <FaBitcoin className="text-primary-600 dark:text-primary-400 text-2xl mr-2" />
            <h2 className="text-2xl font-bold">What is Cryptocurrency?</h2>
          </div>
          
          <div className="card p-6">
            <p className="mb-4">
              Cryptocurrency is a digital or virtual currency secured by cryptography, making it nearly impossible 
              to counterfeit or double-spend. Most cryptocurrencies operate on decentralized networks based on 
              blockchain technology—a distributed ledger enforced by a disparate network of computers.
            </p>
            
            <h3 className="text-xl font-semibold mb-2">Key Features of Cryptocurrencies</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 dark:text-gray-400">
              <li><strong>Decentralization:</strong> Most cryptocurrencies operate without a central authority like a bank or government.</li>
              <li><strong>Limited Supply:</strong> Many cryptocurrencies, like Bitcoin, have a fixed maximum supply, creating scarcity.</li>
              <li><strong>Blockchain Technology:</strong> Transactions are recorded on a public ledger, ensuring transparency and security.</li>
              <li><strong>Pseudonymity:</strong> Users can hold multiple crypto addresses not linked to names or identities.</li>
              <li><strong>Immutability:</strong> Once transactions are confirmed, they cannot be reversed or altered.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2">Popular Cryptocurrencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 className="font-semibold mb-1">Bitcoin (BTC)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">The first cryptocurrency, created in 2009 by Satoshi Nakamoto.</p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 className="font-semibold mb-1">Ethereum (ETH)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">A platform for decentralized applications and smart contracts.</p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 className="font-semibold mb-1">Solana (SOL)</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Known for high throughput and fast transaction speeds.</p>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-100 dark:border-primary-800">
              <p className="text-sm">
                <strong>Did You Know?</strong> Bitcoin's creator, known by the pseudonym Satoshi Nakamoto, has never been identified and 
                owns approximately 1 million bitcoins, worth billions of dollars at today's prices.
              </p>
            </div>
          </div>
        </div>
        
        {/* How Blockchain Works */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <FaExchangeAlt className="text-secondary-600 dark:text-secondary-400 text-2xl mr-2" />
            <h2 className="text-2xl font-bold">How Blockchain Works</h2>
          </div>
          
          <div className="card p-6">
            <p className="mb-4">
              Blockchain is a type of distributed ledger technology (DLT) that records transactions across multiple computers
              so that any involved record cannot be altered retroactively, without the alteration of all subsequent blocks.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2">1. Transaction</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Someone requests a transaction involving cryptocurrency, smart contracts, records, or other information.
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2">2. Verification</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  A network of computers verifies the transaction and the user's status using known algorithms.
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2">3. Structure</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  The verified transaction is combined with other transactions to create a new block of data for the ledger.
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2">4. Hashing</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  The new block is given a hash (a unique code) and added chronologically to the blockchain.
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2">5. Validation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Miners solve complex puzzles to validate the block and earn cryptocurrency rewards.
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2">6. Completion</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  The transaction is complete and the new block becomes a permanent part of the blockchain.
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">Types of Blockchains</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 dark:text-gray-400">
              <li><strong>Public Blockchains:</strong> Open networks where anyone can participate (Bitcoin, Ethereum)</li>
              <li><strong>Private Blockchains:</strong> Restricted networks where access is controlled (Hyperledger Fabric)</li>
              <li><strong>Consortium Blockchains:</strong> Semi-private networks operated by a group of organizations</li>
              <li><strong>Hybrid Blockchains:</strong> Combination of private and public blockchains with customizable features</li>
            </ul>
            
            <div className="mt-4">
              <a 
                href="https://bitcoin.org/bitcoin.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                Read the original Bitcoin whitepaper by Satoshi Nakamoto →
              </a>
            </div>
          </div>
        </div>
        
        {/* How to Read Crypto Charts */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <FaChartLine className="text-accent-500 dark:text-accent-400 text-2xl mr-2" />
            <h2 className="text-2xl font-bold">How to Read Crypto Charts</h2>
          </div>
          
          <div className="card p-6">
            <p className="mb-4">
              Understanding how to read and interpret cryptocurrency price charts is essential for anyone looking to
              invest or trade in the crypto market. Here are the fundamentals you need to know:
            </p>
            
            <h3 className="text-xl font-semibold mb-2">Types of Charts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 className="font-semibold mb-1">Line Charts</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Simple visualization of price over time, good for identifying long-term trends.
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 className="font-semibold mb-1">Candlestick Charts</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Shows open, high, low, and close prices, useful for identifying patterns and market sentiment.
                </p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 className="font-semibold mb-1">Volume Charts</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Displays trading volume, helps confirm price movements and trend strength.
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">Key Indicators</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600 dark:text-gray-400">
              <li><strong>Moving Averages (MA):</strong> Shows the average price over a specific time period, smoothing out volatility.</li>
              <li><strong>Relative Strength Index (RSI):</strong> Measures the speed and change of price movements, indicating overbought or oversold conditions.</li>
              <li><strong>Moving Average Convergence Divergence (MACD):</strong> Shows the relationship between two moving averages, signaling momentum shifts.</li>
              <li><strong>Bollinger Bands:</strong> Indicates volatility and potential price targets based on standard deviations from a moving average.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2">Common Patterns</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 className="font-semibold mb-1">Head and Shoulders</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">A reversal pattern with three peaks, the middle one being the highest.</p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 className="font-semibold mb-1">Double Top/Bottom</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Two peaks or valleys at approximately the same price level, indicating a potential reversal.</p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 className="font-semibold mb-1">Bull/Bear Flag</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">A consolidation pattern after a strong move, often followed by a continuation in the same direction.</p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h4 className="font-semibold mb-1">Triangles</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Ascending, descending, or symmetrical patterns forming as price consolidates before a breakout.</p>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg border border-secondary-100 dark:border-secondary-800">
              <p className="text-sm">
                <strong>Pro Tip:</strong> Use multiple time frames to confirm trends. A bullish signal on a daily chart 
                backed by a similar signal on a weekly chart offers stronger confirmation than a single time frame.
              </p>
            </div>
          </div>
        </div>
        
        {/* Investment Safety Tips */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <FaLock className="text-success-600 dark:text-success-400 text-2xl mr-2" />
            <h2 className="text-2xl font-bold">Investment Safety Tips</h2>
          </div>
          
          <div className="card p-6">
            <p className="mb-4">
              Cryptocurrency investing comes with significant risks. Follow these best practices to protect 
              your investments and navigate the volatile crypto market safely:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2">Research Thoroughly</h3>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Study the project's whitepaper, team, roadmap, and technology</li>
                  <li>Analyze the tokenomics and utility of the cryptocurrency</li>
                  <li>Check community activity on social media and development activity on GitHub</li>
                  <li>Be wary of projects with unrealistic promises or anonymous teams</li>
                </ul>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2">Secure Your Assets</h3>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Use hardware wallets for long-term storage of significant amounts</li>
                  <li>Enable two-factor authentication on all exchange accounts</li>
                  <li>Use strong, unique passwords for each platform</li>
                  <li>Be cautious of phishing attempts and fake websites</li>
                  <li>Keep your recovery phrases offline and in secure locations</li>
                </ul>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2">Risk Management</h3>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Never invest more than you can afford to lose</li>
                  <li>Diversify your portfolio across different assets</li>
                  <li>Consider dollar-cost averaging instead of lump-sum investing</li>
                  <li>Have a clear investment strategy and stick to it</li>
                  <li>Set realistic profit targets and stop-loss limits</li>
                </ul>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold mb-2">Stay Informed</h3>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Follow reputable news sources and crypto analysts</li>
                  <li>Be aware of regulatory developments in your jurisdiction</li>
                  <li>Understand tax implications of crypto transactions</li>
                  <li>Join educational communities to learn from others</li>
                  <li>Stay updated on security best practices</li>
                </ul>
              </div>
            </div>
            
            <div className="p-4 bg-error-50 dark:bg-error-900/20 rounded-lg border border-error-100 dark:border-error-800 mb-4">
              <h3 className="font-semibold mb-1 text-error-700 dark:text-error-400">Common Scams to Avoid</h3>
              <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li><strong>Pump and Dump Schemes:</strong> Artificially inflated prices followed by a mass sell-off</li>
                <li><strong>Fake ICOs/Token Sales:</strong> Projects with no real product or intention to deliver</li>
                <li><strong>Phishing Attacks:</strong> Fake websites or emails designed to steal your credentials</li>
                <li><strong>"Guaranteed" Returns:</strong> No investment can guarantee profits, especially in crypto</li>
                <li><strong>Celebrity Endorsements:</strong> Often fake or paid promotions without disclosure</li>
                <li><strong>Fake Airdrops:</strong> Requiring private keys or large deposits to participate</li>
              </ul>
            </div>
            
            <p className="italic text-sm text-gray-600 dark:text-gray-400">
              Remember that cryptocurrency investments are high-risk and speculative. Past performance is not indicative 
              of future results, and the market can be extremely volatile. Always consult with a financial advisor before 
              making significant investment decisions.
            </p>
          </div>
        </div>
        
        {/* Additional Resources */}
        <div>
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-primary-600 dark:text-primary-400 text-2xl mr-2" />
            <h2 className="text-2xl font-bold">Additional Resources</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="card p-6">
              <h3 className="text-xl font-semibold mb-3">Educational Platforms</h3>
              <ul className="space-y-2">
                <li><a href="https://academy.binance.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Binance Academy</a></li>
                <li><a href="https://www.coinbase.com/learn" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Coinbase Learn</a></li>
                <li><a href="https://www.investopedia.com/cryptocurrency-4427699" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Investopedia</a></li>
                <li><a href="https://cryptozombies.io/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">CryptoZombies (for developers)</a></li>
              </ul>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} className="card p-6">
              <h3 className="text-xl font-semibold mb-3">Research Tools</h3>
              <ul className="space-y-2">
                <li><a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">CoinGecko</a></li>
                <li><a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">CoinMarketCap</a></li>
                <li><a href="https://glassnode.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Glassnode</a></li>
                <li><a href="https://messari.io/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Messari</a></li>
              </ul>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} className="card p-6">
              <h3 className="text-xl font-semibold mb-3">Recommended Books</h3>
              <ul className="space-y-2">
                <li><a href="https://www.amazon.com/Bitcoin-Standard-Decentralized-Alternative-Central/dp/1119473861" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">The Bitcoin Standard</a></li>
                <li><a href="https://www.amazon.com/Cryptoassets-Innovative-Investors-Bitcoin-Beyond/dp/1260026671" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Cryptoassets</a></li>
                <li><a href="https://www.amazon.com/Mastering-Bitcoin-Programming-Open-Blockchain/dp/1491954388" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Mastering Bitcoin</a></li>
                <li><a href="https://www.amazon.com/Mastering-Ethereum-Building-Smart-Contracts/dp/1491971940" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">Mastering Ethereum</a></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learn