'use client';

interface RefreshButtonProps {
  color: 'blue' | 'green';
}

export default function RefreshButton({ color }: RefreshButtonProps) {
  const buttonClasses = color === 'blue' 
    ? 'bg-blue-600 hover:bg-blue-700' 
    : 'bg-green-600 hover:bg-green-700';

  return (
    <button
      onClick={() => window.location.reload()}
      className={`${buttonClasses} text-white font-semibold py-2 px-4 rounded transition-colors flex items-center gap-2`}
    >
      <span>🔄</span>
      Refresh Page
    </button>
  );
} 