import { useState } from 'react';
import { X } from 'lucide-react'; 
import Image from 'next/image';
import Link from 'next/link'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-primary p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={'/home.svg'} alt="CeyHome" width={150} height={100} />
        </div>

        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          <Link href="#buy" className="text-white hover:text-gray-300">Buy</Link>
          <Link href="#sell" className="text-white hover:text-gray-300">Sell</Link>
          <Link href="#rent" className="text-white hover:text-gray-300">Rent</Link>
          <Link href="#manage" className="text-white hover:text-gray-300">Manage Rental</Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link href="/login">
            <button className="text-white border rounded-3xl border-white py-2 px-8 bg-primary hover:bg-white hover:text-primary">
              Login
            </button>
          </Link>
          <Link href="/register">
          <button className="border rounded-3xl border-white py-2 px-8 bg-white text-primary">
            Signup
          </button>
          </Link>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <button className="text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="flex flex-col bg-primary text-white p-4 w-2/3 h-full">
            <button onClick={closeMenu} className="self-end text-white">
              <X size={24} />
            </button>

            <Link href="#buy" className="py-2 border-b border-white">Buy</Link>
            <Link href="#sell" className="py-2 border-b border-white">Sell</Link>
            <Link href="#rent" className="py-2 border-b border-white">Rent</Link>
            <Link href="#manage" className="py-2 border-b border-white">Manage Rental</Link>
            <div className="flex flex-col space-y-4 mt-4">
            <Link href="/login">
              <button className="text-white border rounded-3xl border-white py-2 px-8 bg-primary hover:bg-white hover:text-primary">
                Login
              </button>
            </Link>
              <button className="border rounded-3xl border-white py-2 px-8 bg-white text-primary">
                Signup
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
