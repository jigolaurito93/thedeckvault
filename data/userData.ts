export const UserProfileData = [
  {
    name: "first_name",
    label: "First",
    colSpan: 2,
  },
  {
    name: "last_name",
    label: "Last",
    colSpan: 2,
  },
  {
    name: "email",
    label: "Email",
    colSpan: 2,
  },
  {
    name: "phone",
    label: "Phone",
    colSpan: 2,
  },
  {
    name: "address1",
    label: "Address 1",
    colSpan: 4,
  },
  {
    name: "address2",
    label: "Address 2",
    colSpan: 4,
  },
  {
    name: "city",
    label: "City",
    colSpan: 3,
  },
  {
    name: "state",
    label: "State",
    colSpan: 1,
  },
  {
    name: "zipcode",
    label: "Zip Code",
    colSpan: 2,
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
