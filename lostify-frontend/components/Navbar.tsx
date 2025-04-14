// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          Lostify
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/search" className="text-white">Search</Link>
          <Link href="/report" className="text-white">Report</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
