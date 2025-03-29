import Link from 'next/link';

export default function ExamplesHome() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-100">Next.js Rendering Strategies</h1>
        <p className="text-gray-300 text-lg">Learn the differences between Server-Side Rendering and Static Site Generation</p>
      </div>

      {/* Quick Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <Link 
          href="/examples/ssr" 
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-center flex items-center justify-center gap-2"
        >
          <span className="text-xl">🚀</span>
          Try SSR Example
        </Link>
        <Link 
          href="/examples/ssg" 
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-center flex items-center justify-center gap-2"
        >
          <span className="text-xl">⚡</span>
          Try SSG Example
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* SSR Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Server-Side Rendering (SSR)</h2>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2 text-gray-100">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Pages generated on each request</li>
                <li>Real-time data</li>
                <li>Dynamic content</li>
                <li>SEO-friendly</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2 text-gray-100">Best For:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>E-commerce sites</li>
                <li>Social media feeds</li>
                <li>Personalized content</li>
                <li>Real-time dashboards</li>
              </ul>
            </div>
            <Link 
              href="/examples/ssr" 
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              View SSR Example
            </Link>
          </div>
        </div>

        {/* SSG Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Static Site Generation (SSG)</h2>
          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2 text-gray-100">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Pages generated at build time</li>
                <li>Instant page loads</li>
                <li>Zero server load</li>
                <li>CDN-friendly</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <h3 className="font-semibold mb-2 text-gray-100">Best For:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>Blog posts</li>
                <li>Documentation</li>
                <li>Marketing sites</li>
                <li>Portfolio websites</li>
              </ul>
            </div>
            <Link 
              href="/examples/ssg" 
              className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              View SSG Example
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-100">How to Compare</h2>
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-semibold mb-2 text-gray-100">Try these steps:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Click the buttons above to visit each example</li>
              <li>Refresh each page multiple times</li>
              <li>Notice the loading states in SSR vs instant loads in SSG</li>
              <li>Check how timestamps update in SSR vs stay the same in SSG</li>
              <li>Observe the network tab in your browser's dev tools</li>
            </ol>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="font-semibold mb-2 text-gray-100">Key Differences:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>SSR: Content is generated on each request</li>
              <li>SSG: Content is generated once at build time</li>
              <li>SSR: Shows loading states to users</li>
              <li>SSG: Instant page loads with no loading states</li>
              <li>SSR: Higher server load but always fresh content</li>
              <li>SSG: Zero server load but content needs rebuild to update</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 