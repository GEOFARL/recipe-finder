'use client';

const ErrorPage: React.FC<{
  error: Error;
  reset: () => void;
}> = ({ error, reset }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-3xl font-bold text-red-600">Oops! Something went wrong.</h1>
      <p className="text-gray-700 mt-2">{error.message || 'Unable to load recipes.'}</p>
      <button onClick={reset} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Retry
      </button>
    </div>
  );
};

export default ErrorPage;
