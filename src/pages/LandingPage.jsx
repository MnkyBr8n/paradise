import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white" style={{ backgroundImage: "url('/images/landing-bg.jpg')" }}>
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Paradise Nursery</h1>
      <p className="max-w-xl text-center text-lg mb-6 drop-shadow-md">
        Welcome to Paradise Nursery, your one-stop shop for beautiful, healthy houseplants.
        From beginners to green thumbs, we’ve got the perfect greenery for everyone!
      </p>
      <Link to="/products">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full shadow-lg">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;