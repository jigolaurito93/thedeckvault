"use client";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface AdminUsersProps {
  id: number;
  role: string;
  display_name: string;
  email: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

const userTitle = [
  "ID",
  "Role",
  "Display Name",
  "Email",
  "Image URL",
  "Created At",
  "Updated At",
];

const AdminUsers = () => {
  const [users, setUsers] = useState<AdminUsersProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    const supabase = createClient();
    const { data, error } = await supabase.from("profiles").select("*");
    if (error) {
      console.error("Error fetching users:", error);
      setError("Error fetching users");
    } else {
      setUsers(data || []);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="px-32 py-10">
      <div>
        <button className="bg-blue-500 px-4 py-2 text-white rounded-md">
          <Link href={"/admin/products"}>Products</Link>
        </button>
      </div>
      <h1 className="text-5xl py-6 font-semibold">Welcome Admin!</h1>
      <h1 className="text-2xl py-4">Products</h1>
      {error && <p>Error: {error}</p>}
      <table className="min-w-full border-collapse border border-black">
        <thead>
          <tr>
            {userTitle.map((title, i) => (
              <th key={i} className="border border-black px-4 py-2">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const {
              id,
              role,
              display_name,
              email,
              image_url,
              created_at,
              updated_at,
            } = user;

            return (
              <tr key={id}>
                <td className="border border-black px-4 py-2">{id}</td>
                <td className="border border-black px-4 py-2">{role}</td>
                <td className="border border-black px-4 py-2">
                  {display_name}
                </td>
                <td className="border border-black px-4 py-2">{email}</td>
                <td className="border border-black px-4 py-2">{image_url}</td>
                <td className="border border-black px-4 py-2">
                  {new Date(created_at).toLocaleDateString()}
                </td>
                <td className="border border-black px-4 py-2">
                  {new Date(updated_at).toLocaleDateString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;