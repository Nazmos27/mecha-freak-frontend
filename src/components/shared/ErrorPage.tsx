import React from "react";
import { Link } from "react-router-dom";

const ErrorPage: React.FC = () => {
  return (
    <div className="w-full h-screen bg-blue-950 flex items-center justify-center">
      <div className="px-6 py-10 flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-5xl w-fit text-white">
          OOOPPPSSS!! 404 !
        </h1>
        <h1 className="text-center font-bold text-xl  my-2 w-fit text-white">
          An ERROR Occured
        </h1>
        <Link to="/" className="btn myPrimaryBtn">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
