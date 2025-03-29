import { Suspense } from 'react';
import RefreshButton from '@/app/components/RefreshButton';
import CodeDisplay from '@/app/components/CodeDisplay';
import Loading from './loading';

// Code examples
const serverComponentCode = `// Server Component (page.tsx)
interface Post {
  id: number;
  title: string;
  body: string;
}

async function ServerComponent() {
  // Force dynamic rendering
  const data = await fetch('https://api.example.com/data', {
    cache: 'no-store'  // Disable caching
  });
  const posts: Post[] = await data.json();
  
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}`;

const pageCode = `// Page Component
export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <ServerComponent />
    </Suspense>
  );
}`;

const loadingCode = `// Loading Component
function Loading() {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700 flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
      {[1, 2, 3].map((i) => (
        <div key={i} className="p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700 animate-pulse">
          <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
      ))}
    </div>
  );
}`;

// This is a Server Component by default in App Router
interface Post {
  id: number;
  title: string;
  body: string;
}

async function ServerComponent() {
  // Fetch multiple posts to demonstrate dynamic data
  const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3', {
    // Force dynamic rendering
    cache: 'no-store'
  });
  const posts = await data.json();

  return (
    <div className="space-y-4">
      {posts.map(async (post: Post, index: number) => {
        // Add different delays for each post
        await new Promise(resolve => setTimeout(resolve, (index + 1) * 1000));
        
        return (
          <div key={post.id} className="p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-xl font-bold mb-2 text-gray-100">{post.title}</h2>
            <p className="text-gray-300">{post.body}</p>
            <div className="mt-2 flex justify-between items-center">
              <p className="text-sm text-gray-400">
                Post ID: {post.id}
              </p>
              <p className="text-sm text-gray-400">
                Rendered: {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Loading component shown while server component is loading


export default function SSRExample() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-100">Server-Side Rendering Example</h1>
        <RefreshButton color="blue" />
      </div>
      
      <div className="space-y-4">
        {/* Live Example Section */}
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="font-semibold mb-2 text-gray-100">Live Example</h3>
          <div className="mt-4 p-3 bg-gray-700 rounded text-sm text-gray-300">
            <p className="font-semibold mb-1">Try it out:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Click the refresh button above</li>
              <li>Watch the loading progress bar</li>
              <li>Notice the 3-second loading state</li>
              <li>Check the timestamps - they update on each refresh</li>
            </ol>
          </div>
        </div>

        <Suspense fallback={<Loading />}>
          <ServerComponent />
        </Suspense>

        {/* Features Section */}
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="font-semibold mb-2 text-gray-100">This page demonstrates:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>Server-side data fetching</li>
            <li>Dynamic rendering</li>
            <li>Streaming with Suspense</li>
            <li>Loading states</li>
            <li>Real-time updates on refresh</li>
          </ul>
        </div>

        {/* Implementation Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-100">Implementation</h3>
          <CodeDisplay 
            code={serverComponentCode}
            title="Server Component Implementation"
          />
          <CodeDisplay 
            code={pageCode}
            title="Page Component with Suspense"
          />
          <CodeDisplay 
            code={loadingCode}
            title="Loading State Implementation"
          />
        </div>
      </div>
    </div>
  );
} 