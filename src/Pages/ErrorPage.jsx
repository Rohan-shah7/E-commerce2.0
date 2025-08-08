// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4">
      <h1 className="text-9xl font-extrabold text-gray-500">404</h1>
      <p className="text-2xl md:text-3xl font-bold mt-4">
        Oops! Page not found
      </p>
      <p className="mt-2 text-gray-600 text-center">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
}
