"use client";

import { compareUserID } from "@/utils/compareUserID";
import { createClient } from "@/utils/supabase/client";
import { UserDataProps } from "@/utils/userDataProps";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";

const EditProfilePage = () => {
  const [userData, setUserData] = useState<UserDataProps>();
  const [userField, setUserField] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
    email: "",
  });
  useEffect(() => {
    const fetchUser = async () => {
      const data = await compareUserID();
      if (data) {
        setUserData(data);
        setUserField({
          first_name: data.first_name || "",
          last_name: data.last_name || "",
          phone: data.phone || "",
          address1: data.address1 || "",
          address2: data.address2 || "",
          city: data.city || "",
          state: data.state || "",
          zipcode: data.zipcode || "",
          email: data.email || "",
        });
      }
    };
    fetchUser();
  }, []);

  const handleSubmit = async () => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("profiles")
      .update({
        first_name: userField.first_name || null,
        last_name: userField.last_name || null,
        phone: userField.phone || null,
        address1: userField.address1 || null,
        address2: userField.address2 || null,
        city: userField.city || null,
        state: userField.state || null,
        zipcode: userField.zipcode || null,
        email: userField.email || null, // Update email field
      })
      .eq("id", userData?.id);
    console.log("This is the ID:", userData?.id);

    if (error) {
      console.error("Error updating profile:", error);
    } else {
      console.log("Profile updated successfully:", data);
      // Optionally, redirect or show a success message
    }
  };

  return (
    <div>
      <div className="border w-fit mx-auto my-16 py-10 px-16 gap-10 flex flex-col">
        <div>
          <button className="bg-blue-500 px-4 py-2 text-white rounded-md">
            <Link href={"#"} className="flex items-center gap-1">
              <IoChevronBackOutline />
              Back
            </Link>
          </button>
        </div>
        <h1 className="text-4xl font-medium">Edit User</h1>
        <form action="" className="flex gap-6">
          {/* LEFT */}
          <div className="flex flex-col gap-3">
            <div className="border w-48 h-48 flex justify-center items-center">
              <Image
                src={userData?.image_url || "/avatar.png"}
                alt="Profile Image"
                width={200}
                height={200}
                priority
              />
            </div>
            <button className="border px-4 py-1 w-fit self-end">
              Edit Image
            </button>
          </div>
          {/* LEFT */}
          {/* RIGHT */}
          <div className="grid grid-cols-4 gap-3 w-[30rem]">
            <div className="flex gap-1 flex-col col-span-2">
              <label htmlFor="name" className="pl-2 text-sm">
                First
              </label>
              <input
                type="text"
                id="name"
                className="border rounded-md px-2 py-1"
                value={userField.first_name}
                onChange={(e) => {
                  setUserField({ ...userField, first_name: e.target.value });
                }}
              />
            </div>
            <div className="flex gap-1 flex-col col-span-2">
              <label htmlFor="name" className="pl-2 text-sm">
                Last
              </label>
              <input
                type="text"
                id="lastName"
                className="border rounded-md px-2 py-1"
                value={userField.last_name}
                onChange={(e) => {
                  setUserField({ ...userField, last_name: e.target.value });
                }}
              />
            </div>

            <div className="flex gap-1 flex-col col-span-2">
              <label htmlFor="name" className="pl-2 text-sm">
                Email
              </label>
              <input
                type="text"
                className="border rounded-md px-2 py-1"
                value={userData?.email}
              />
            </div>
            <div className="flex gap-1 flex-col col-span-2">
              <label htmlFor="name" className="pl-2 text-sm">
                {" "}
                Phone
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="border rounded-md px-2 py-1"
                value={userField.phone}
                onChange={(e) => {
                  setUserField({ ...userField, phone: e.target.value });
                }}
              />
            </div>
            <div className="flex gap-1 flex-col col-span-4">
              <label htmlFor="name" className="pl-2 text-sm">
                {" "}
                Address 1
              </label>
              <input
                type="text"
                id="address1"
                className="border rounded-md px-2 py-1"
                value={userField.address1}
                onChange={(e) => {
                  setUserField({ ...userField, address1: e.target.value });
                }}
              />
            </div>
            <div className="flex gap-1 flex-col col-span-1">
              <label htmlFor="name" className="pl-2 text-sm">
                {" "}
                Address 2
              </label>
              <input
                type="text"
                id="unitNo"
                className="border rounded-md px-2 py-1"
                value={userField.address2}
                onChange={(e) => {
                  setUserField({ ...userField, address2: e.target.value });
                }}
              />
            </div>
            <div className="flex gap-1 flex-col col-span-3">
              <label htmlFor="name" className="pl-2 text-sm">
                {" "}
                City
              </label>
              <input
                type="text"
                id="city"
                className="border rounded-md px-2 py-1"
                value={userField.city}
                onChange={(e) => {
                  setUserField({ ...userField, city: e.target.value });
                }}
              />
            </div>
            <div className="flex gap-1 flex-col col-span-2">
              <label htmlFor="name" className="pl-2 text-sm">
                {" "}
                State
              </label>
              <input
                type="text"
                id="state"
                className="border rounded-md px-2 py-1"
                value={userField.state}
                onChange={(e) => {
                  setUserField({ ...userField, state: e.target.value });
                }}
              />
            </div>
            <div className="flex gap-1 flex-col col-span-2">
              <label htmlFor="name" className="pl-2 text-sm">
                {" "}
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                className="border rounded-md px-2 py-1"
                value={userField.zipcode}
                onChange={(e) => {
                  setUserField({ ...userField, zipcode: e.target.value });
                }}
              />
            </div>
            <div className="col-span-4 flex justify-end mt-6">
              <button
                type="submit"
                onClick={handleSubmit}
                className="border px-4 py-1 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
          {/* RIGHT */}
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
