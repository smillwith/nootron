import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

function App() {
  const [message, setMessage] = useState<string>('Loading...')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('http://localhost:3001/api/hello')
      .then(response => response.json())
      .then(data => {
        setMessage(data.message)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setMessage('Error connecting to server')
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Full-Stack React + Node.js</h1>
        
        <div className="flex items-center justify-center mb-6">
          <div className="bg-blue-500 text-white px-4 py-2 rounded">React</div>
          <ArrowRight className="mx-4" />
          <div className="bg-green-500 text-white px-4 py-2 rounded">Node.js</div>
        </div>
        
        <div className="border rounded-lg p-4 bg-gray-50">
          <h2 className="text-lg font-semibold mb-2">Server Response:</h2>
          <p className={`text-center p-4 rounded ${isLoading ? 'animate-pulse bg-gray-200' : 'bg-gray-100'}`}>
            {message}
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
