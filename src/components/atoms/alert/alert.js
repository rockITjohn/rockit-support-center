import { useEffect, useState } from "react";
const Alert = ({ color, setShowAlert }) => {
  return (
    <div
      className={`mx-auto z-50 text-black px-6 py-4 border-0 rounded absolute mb-4 bg-${color}-500 bg-red-500 my-2`}
    >
      <span className="inline-block align-middle mr-8">
        Search term must be one character or greater
      </span>
      <button
        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
        onClick={() => setShowAlert(false)}
      >
        <span>×</span>
      </button>
    </div>
  );
};

export default Alert;
