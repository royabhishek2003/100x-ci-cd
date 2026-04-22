export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-400 to-purple-500">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white font-geist-sans">MyWebsite</h2>
          <div className="flex gap-6">
            <a href="/" className="text-white hover:text-blue-100 transition font-geist-sans">
              Home
            </a>
            <a href="/about" className="text-white hover:text-blue-100 transition font-geist-sans">
              About
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-center px-8 max-w-2xl">
          <h1 className="text-6xl font-bold text-white mb-6 font-geist-sans drop-shadow-lg">
            Welcome to Our Website
          </h1>
          <p className="text-xl text-blue-50 mb-8 font-geist-mono drop-shadow">
            A beautiful and simple Next.js website built with Tailwind CSS
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/about"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-all shadow-lg"
            >
              Learn More
            </a>
            <a
              href="#"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
