import Sidebar from "./sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-4 bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;