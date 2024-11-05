import { Link } from "react-router-dom";
import errorImg from "../assets/error.webp";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 min-h-screen">
         <Helmet>
        <meta charSet="utf-8" />
        <title>Error - Gadget Heaven Accessories</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-4xl font-bold">Ooppss !!</h1>
     
      <img className="max-w-[600px] rounded-2xl" src={errorImg} alt="" />
      <Link to="/" className="btn btn-primary">
        Go To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
