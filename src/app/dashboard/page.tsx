import Layout from "@/components/admin/layout";

const Dashboard = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6 text-black">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Registered Users Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-gray-700 text-lg font-semibold">Registered Users</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">1,245</p>
          <p className="text-sm text-gray-500 mt-1">As of today</p>
        </div>

        {/* Property Listings Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-gray-700 text-lg font-semibold">Property Listings</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">528</p>
          <p className="text-sm text-gray-500 mt-1">Currently active</p>
        </div>

        {/* Subscription Earnings Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-gray-700 text-lg font-semibold">Subscription Earnings</h2>
          <p className="text-3xl font-bold text-purple-600 mt-2">$12,340</p>
          <p className="text-sm text-gray-500 mt-1">This month</p>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
