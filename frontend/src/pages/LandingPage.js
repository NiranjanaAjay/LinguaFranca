import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-300 via-purple-300 to-blue-200 p-8">
      
      {/* Logo + Title Section */}
      <div className="text-center mb-14 animate-fadeIn">
        <img
          src="/logo.png"
          alt="LinguaFranca Logo"
          className="w-28 h-28 mx-auto mb-6 drop-shadow-xl"
        />

        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 tracking-tight drop-shadow-sm">
          Lingua<span className="text-purple-700">Franca</span>
        </h1>

        <p className="mt-6 text-2xl text-gray-800 max-w-2xl mx-auto leading-relaxed">
          A sleek, powerful, and intuitive language translation tool with real-time 
          text and voice translation — powered by AI.
        </p>
      </div>

      {/* CTA Button */}
      <Link
        to="/signin"
        className="px-10 py-4 bg-purple-700 text-white text-xl font-semibold rounded-xl shadow-lg hover:bg-purple-800 hover:shadow-xl transition-transform transform hover:-translate-y-1"
      >
        Try Now
      </Link>
    </div>
  );
}
