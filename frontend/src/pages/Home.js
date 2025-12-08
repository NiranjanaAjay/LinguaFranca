import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in, redirect to landing if not
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-indigo-200">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 drop-shadow-lg" />
          <h1 className="text-2xl font-bold text-gray-800">LinguaFranca</h1>
        </div>

        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition"
        >
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center h-[calc(100vh-100px)]">
        <h2 className="text-5xl font-bold text-gray-900">
          Welcome to LinguaFranca!
        </h2>
      </div>
    </div>
  );
}
