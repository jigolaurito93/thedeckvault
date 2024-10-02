import Link from "next/link";
import React from "react";

const AdminDashboard = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-fit flex border rounded-lg shadow-xl p-20 m-56 gap-8">
        <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
          <Link href="/admin/users">Users</Link>
        </button>
        <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
          <Link href="/admin/products">Products</Link>
        </button>
        <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
          <Link href="/admin/orders">Orders</Link>
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
