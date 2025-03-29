import RefreshButton from '@/app/components/RefreshButton';
import CodeDisplay from '@/app/components/CodeDisplay';

// Code examples
const staticComponentCode = `// Static Component (page.tsx)
interface Post {
  id: number;
  title: string;
  body: string;
}

async function StaticComponent() {
  // Data fetching at build time
  const data = await fetch('https://api.example.com/data', {
    cache: 'force-cache'  // Enable caching
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
  return <StaticComponent />;
}`;

const generateStaticParamsCode = `// Optional: Generate static paths
interface StaticParams {
  id: string;
}

export async function generateStaticParams(): Promise<StaticParams[]> {
  // Generate static pages at build time
  return [
    { id: '1' },
    { id: '2' },
    // ... more paths
  ];
}`;

// This is a Server Component that will be statically generated at build time
async function StaticComponent() {
  // Add artificial delay to demonstrate build-time generation
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // This data fetching happens at build time
  const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3', {
    // Enable caching - this is the default behavior
    cache: 'force-cache'
  });
  const posts = await data.json();

  return (
    <div className="space-y-4">
      {posts.map((post: any) => (
        <div key={post.id} className="p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-xl font-bold mb-2 text-gray-100">{post.title}</h2>
          <p className="text-gray-300">{post.body}</p>
          <div className="mt-2 flex justify-between items-center">
            <p className="text-sm text-gray-400">
              Post ID: {post.id}
            </p>
            <p className="text-sm text-gray-400">
              Generated at: {new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SSGExample() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-100">Static Site Generation Example</h1>
        <RefreshButton color="green" />
      </div>
      
      <div className="space-y-4">
        {/* Live Example Section */}
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="font-semibold mb-2 text-gray-100">Live Example</h3>
          <div className="mt-4 p-3 bg-gray-700 rounded text-sm text-gray-300">
            <p className="font-semibold mb-1">Try it out:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Click the refresh button above</li>
              <li>Notice the instant page load</li>
              <li>Timestamps stay the same until rebuild</li>
              <li>No loading states or server processing</li>
            </ol>
          </div>
        </div>

        <StaticComponent />

        {/* Features Section */}
        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="font-semibold mb-2 text-gray-100">This page demonstrates:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>Static data fetching at build time</li>
            <li>Content caching</li>
            <li>Zero server load after deployment</li>
            <li>Instant page loads for users</li>
            <li>Same content until rebuild</li>
          </ul>
        </div>

        {/* Implementation Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-100">Implementation</h3>
          <CodeDisplay 
            code={staticComponentCode}
            title="Static Component Implementation"
          />
          <CodeDisplay 
            code={pageCode}
            title="Page Component"
          />
          <CodeDisplay 
            code={generateStaticParamsCode}
            title="Optional: Generate Static Paths"
          />
        </div>
      </div>
    </div>
  );
} 