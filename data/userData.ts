export const UserProfileData = [
  {
    name: "first_name",
    label: "First",
    className: "col-span-2",
  },
  {
    name: "last_name",
    label: "Last",
    className: "col-span-2",
  },
  {
    name: "email",
    label: "Email",
    className: "col-span-2",
  },
  {
    name: "phone",
    label: "Phone",
    className: "col-span-2",
  },
  {
    name: "address1",
    label: "Address 1",
    className: "col-span-4",
  },
  {
    name: "address2",
    label: "Address 2",
    className: "col-span-2",
  },
  {
    name: "city",
    label: "City",
    className: "col-span-2",
  },
  {
    name: "state",
    label: "State",
    className: "col-span-1",
  },
  {
    name: "zipcode",
    label: "Zip Code",
    className: "col-span-2",
  },
];

export interface UserFieldProps {
  first_name: string;
  last_name: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: string;
  email: string;
}
