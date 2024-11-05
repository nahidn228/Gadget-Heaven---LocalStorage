import { Link } from "react-router-dom";
import errorImg from "../assets/error.webp";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 min-h-screen">
      <h1 className="text-4xl font-bold">Ooppss !!</h1>
     
      <img className="max-w-[600px] rounded-2xl" src={errorImg} alt="" />
      <Link to="/" className="btn btn-primary">
        Go To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
