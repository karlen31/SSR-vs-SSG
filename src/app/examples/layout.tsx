import Link from 'next/link';

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/examples" className="text-gray-100 font-bold">
                Next.js Rendering Examples
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/examples" 
                className="text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link 
                href="/examples/ssr" 
                className="text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                SSR
              </Link>
              <Link 
                href="/examples/ssg" 
                className="text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium"
              >
                SSG
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
} 