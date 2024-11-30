import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Error - Gadget Heaven Accessories</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-9xl font-bold text-[#9538E2]">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
      <p className="mt-2 text-center text-lg">
        Oops! The page you are looking for doesn't exist. <br /> It might have
        been moved or deleted.
      </p>
      <div className="mt-6">
        <Link
          to="/"
          className="px-6 py-3 text-lg font-medium text-white bg-[#9538E2] rounded-lg hover:bg-[#6b21a8] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
