"use client";

import { StatesUSA } from "@/data/statesUSA";
import { CapitalizeText } from "@/utils/capitalizeText";
import { compareUserID } from "@/utils/compareUserID";
import { createClient } from "@/utils/supabase/client";
import { UserDataProps } from "@/data/userDataProps";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { UserFieldProps, UserProfileData } from "@/data/userData";

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
    email: "", // Added email field
  });

  useEffect(() => {
    const fetchUser = async () => {
      const data = await compareUserID();
      if (data) {
        setUserData(data);
        setUserField({
          first_name: CapitalizeText(data.first_name) || "",
          last_name: data.last_name || "",
          phone: data.phone || "",
          address1: CapitalizeText(data.address1) || "",
          address2: data.address2 || "",
          city: CapitalizeText(data.city) || "",
          state: data.state || "",
          zipcode: data.zipcode || "",
          email: data.email || "", // Set email field
        });
      }
    };
    fetchUser();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("Submitting form with values:", userField);

    const supabase = createClient();
    const { data, error } = await supabase
      .from("profiles")
      .update({
        first_name: userField.first_name || "",
        last_name: userField.last_name || "",
        phone: userField.phone || "",
        address1: userField.address1 || "",
        address2: userField.address2 || "",
        city: userField.city || "",
        state: userField.state || "",
        zipcode: userField.zipcode || "",
        email: userField.email, // Update email field
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
        <form className="flex gap-6" onSubmit={handleSubmit}>
          {/* LEFT */}
          <div className="flex flex-col gap-3">
            <div className="border w-48 h-48 flex justify-center items-center">
              <Image
                src={userData?.image_url || "/avatar.png"}
                alt="Profile Image"
                width={192}
                height={192}
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
            {UserProfileData.map((data) => {
              const { name, label, colSpan } = data;
              return (
                <div className={`flex gap-1 flex-col ${colSpan}`}>
                  <label htmlFor={name} className="pl-2 text-sm">
                    {label}
                  </label>
                  <input
                    type="text"
                    id={name}
                    className="border rounded-md px-2 py-1"
                    value={userField[name as keyof UserFieldProps]}
                    onChange={(e) => {
                      setUserField({
                        ...userField,
                        [name]: e.target.value,
                      });
                    }}
                  />
                </div>
              );
            })}
            <div className="flex gap-1 flex-col col-span-2">
              <label htmlFor="first_name" className="pl-2 text-sm">
                First
              </label>
              <input
                type="text"
                id="first_name"
                className="border rounded-md px-2 py-1"
                value={userField.first_name}
                onChange={(e) => {
                  setUserField({ ...userField, first_name: e.target.value });
                }}
              />
            </div>
            <div className="flex gap-1 flex-col col-span-2">
              <label htmlFor="last_name" className="pl-2 text-sm">
                Last
              </label>
              <input
                type="text"
                id="last_name"
                className="border rounded-md px-2 py-1"
                value={userField.last_name}
                onChange={(e) => {
                  setUserField({
                    ...userField,
                    last_name: e.target.value,
                  });
                }}
              />
            </div>

            <div className="flex gap-1 flex-col col-span-2">
              <label htmlFor="email" className="pl-2 text-sm">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="border rounded-md px-2 py-1"
                value={userField.email}
                onChange={(e) => {
                  setUserField({ ...userField, email: e.target.value });
                }}
              />
            </div>
            <div className="flex gap-1 flex-col col-span-2">
              <label htmlFor="phone" className="pl-2 text-sm">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="border rounded-md px-2 py-1"
                value={userField.phone}
                onChange={(e) => {
                  setUserField({ ...userField, phone: e.target.value });
                }}
              />
            </div>
            <div className="flex gap-1 flex-col col-span-4">
              <label htmlFor="address1" className="pl-2 text-sm">
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
            <div className="flex gap-1 flex-col col-span-4">
              <label htmlFor="address2" className="pl-2 text-sm">
                Address 2
              </label>
              <input
                type="text"
                id="address2"
                className="border rounded-md px-2 py-1"
                value={userField.address2}
                onChange={(e) => {
                  setUserField({ ...userField, address2: e.target.value });
                }}
              />
            </div>
            <div className="flex gap-1 flex-col col-span-3">
              <label htmlFor="city" className="pl-2 text-sm">
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
            <div className="flex gap-1 flex-col col-span-1">
              <label htmlFor="state" className="pl-2 text-sm">
                State
              </label>
              <select
                id="state"
                className="border rounded-md px-2 py-1"
                value={userField.state}
                onChange={(e) => {
                  setUserField({ ...userField, state: e.target.value });
                }}
              >
                {StatesUSA.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {/* <input
                type="text"
                id="state"
                className="border rounded-md px-2 py-1"
                value={userField.state}
                onChange={(e) => {
                  setUserField({ ...userField, state: e.target.value });
                }}
              /> */}
            </div>
            <div className="flex gap-1 flex-col col-span-2">
              <label htmlFor="zipcode" className="pl-2 text-sm">
                Zip Code
              </label>
              <input
                type="text"
                id="zipcode"
                className="border rounded-md px-2 py-1"
                value={userField.zipcode}
                onChange={(e) => {
                  setUserField({ ...userField, zipcode: e.target.value });
                }}
              />
            </div>
            <div className="col-span-4 flex justify-end mt-6">
              <button type="submit" className="border px-4 py-1 rounded-md">
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
