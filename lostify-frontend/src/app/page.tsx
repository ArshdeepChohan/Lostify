// pages/index.tsx
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to Lostify</h1>
          <p className="mt-4 text-lg text-gray-600">A Lost & Found Management System</p>
          <div className="mt-6">
            <a
              href="/search"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Search for Lost Items
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
