import { IoChevronBackOutline } from "react-icons/io5";
import Link from "next/link";
const EditUserPage = () => {
  return (
    <div>
      <div className="border w-fit mx-auto my-16 py-10 px-16 gap-10 flex flex-col">
        <div>
          <button className="bg-blue-500 px-4 py-2 text-white rounded-md">
            <Link href={"/admin/users"} className="flex items-center gap-1">
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
              <div>IMAGE</div>
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
              />
            </div>

            <div className="flex gap-1 flex-col col-span-3">
              <label htmlFor="name" className="pl-2 text-sm">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="border rounded-md px-2 py-1"
              />
            </div>
            <div className="flex gap-1 flex-col col-span-1">
              <label htmlFor="name" className="pl-2 text-sm">
                Role
              </label>
              <input
                type="text"
                id="role"
                className="border rounded-md px-2 py-1"
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
              />
            </div>
            <div className="flex gap-1 flex-col col-span-1">
              <label htmlFor="name" className="pl-2 text-sm">
                {" "}
                Unit No.
              </label>
              <input
                type="text"
                id="unitNo"
                className="border rounded-md px-2 py-1"
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
              />
            </div>
            <div className="col-span-4 flex justify-end mt-6">
              <button className="border px-4 py-1 rounded-md">Save</button>
            </div>
          </div>
          {/* RIGHT */}
        </form>
      </div>
    </div>
  );
};

export default EditUserPage;
