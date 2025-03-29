import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-100">
            Next.js Rendering Examples
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Learn about Server-Side Rendering and Static Site Generation in Next.js
          </p>
          <Link 
            href="/examples" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
          >
            View Examples
          </Link>
        </div>
      </div>
    </div>
  );
}
