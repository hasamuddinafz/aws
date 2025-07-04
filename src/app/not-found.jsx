import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function NotFound() {
  return (
    <div className="bg-slate-50 flex items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md">
        <div data-aos="fade-up">
          <h1 className="text-8xl sm:text-9xl font-extrabold text-green-600 tracking-tighter">
            404
          </h1>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-800">
            Page Not Found
          </h2>
          <p className="mt-3 text-base text-gray-600">
            It looks like you're lost. The page you're looking for doesn't exist
            or may have been moved.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 bg-green-600 text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:-translate-y-1"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
