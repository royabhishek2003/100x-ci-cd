export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 via-pink-400 to-orange-500">
      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white font-geist-sans">MyWebsite</h2>
          <div className="flex gap-6">
            <a href="/" className="text-white hover:text-orange-100 transition font-geist-sans">
              Home
            </a>
            <a href="/about" className="text-white hover:text-orange-100 transition font-geist-sans">
              About
            </a>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="max-w-2xl px-8 py-12">
          <h1 className="text-5xl font-bold text-white mb-8 font-geist-sans drop-shadow-lg">
            About Us
          </h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4 font-geist-sans">
              Who We Are
            </h2>
            <p className="text-white text-lg leading-relaxed mb-4 font-geist-mono">
              We are a team dedicated to creating beautiful and modern web experiences. 
              This is a simple Next.js website showcasing clean design and excellent user experience.
            </p>
            <p className="text-white text-lg leading-relaxed font-geist-mono">
              Built with Next.js 16, React 19, and Tailwind CSS for a fast, responsive, and accessible website.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4 font-geist-sans">
              Our Features
            </h2>
            <ul className="text-white text-lg space-y-3 font-geist-mono">
              <li className="flex items-center">
                <span className="text-orange-300 mr-3">✓</span>
                Modern responsive design
              </li>
              <li className="flex items-center">
                <span className="text-orange-300 mr-3">✓</span>
                Beautiful gradients and colors
              </li>
              <li className="flex items-center">
                <span className="text-orange-300 mr-3">✓</span>
                Smooth navigation between pages
              </li>
              <li className="flex items-center">
                <span className="text-orange-300 mr-3">✓</span>
                Geist fonts for superior typography
              </li>
            </ul>
          </div>

          <a
            href="/"
            className="inline-block bg-white text-purple-600 hover:bg-orange-100 font-semibold py-3 px-8 rounded-lg transition-all shadow-lg"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}