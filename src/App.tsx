import Terminal from './Terminal';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to My Terminal Portfolio
          </h1>
          <p className="text-gray-400 text-lg">
            Type 'help' to see available commands
          </p>
        </div>
        
        <Terminal />
        
        <div className="mt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Jagdish Butte. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;