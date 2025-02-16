import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white flex flex-col w-64">
      <div className="p-4 text-lg font-bold border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 p-4 space-y-4">
        <Link href="/dashboard" className="block p-2 rounded hover:bg-gray-700">
          Dashboard
        </Link>
        <Link href="/dashboard/listings" className="block p-2 rounded hover:bg-gray-700">
          Listings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
