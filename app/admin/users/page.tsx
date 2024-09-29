"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useState } from "react";

interface AdminUsersProps {
  id: string;
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
    // Fetch users from the database
    const supabase = createClient();
    const { data, error } = await supabase.from("profiles").select("*");
    if (error) {
      console.error("Error fetching users:", error);
    } else {
      setUsers(data || []);
    }
  };
  return (
    <div className="px-32 py-10">
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
      </table>
    </div>
  );
};

export default AdminUsers;
