export default function Loading() {
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
} 