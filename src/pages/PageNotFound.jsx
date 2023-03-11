import { useEffect } from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  useEffect(() => {
    document.title = "404 - Baby Shop";
  }, []);
  return (
    <div className="h-56 flex flex-col items-center justify-center">
      <div className="text-5xl font-bold text-gray-700">
        404 - Page Not Found!
      </div>
      <Link
        to="/"
        className="block mt-6 bg-pink-700 py-3 px-4 rounded-full hover:bg-pink-900 text-white"
      >
        Go to Home Page
      </Link>
    </div>
  );
}

export default PageNotFound;
