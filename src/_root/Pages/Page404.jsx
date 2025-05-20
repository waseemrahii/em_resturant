import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      {/* Page 404 page not found */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="px-6 py-2 bg-primary-500 text-white rounded hover:bg-blue-600 transition duration-300">
        Go To Home
      </Link>
    </div>
  );
};

export default Page404;