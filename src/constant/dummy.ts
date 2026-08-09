import type { iconMap } from "./iconMap";

export const expenseDummy = [
  {
    id: 1,
    date: "7/25/2026",
    description: "ami ki dawai",
    amount: 2000,
    category: "medicine",
    status: "paid",
  },
  {
    id: 2,
    date: "7/24/2026",
    description: "Grocery shopping",
    amount: 4500,
    category: "grocery",
    status: "paid",
  },
  {
    id: 3,
    date: "7/23/2026",
    description: "Electricity bill",
    amount: 8500,
    category: "utilities",
    status: "pending",
  },
  {
    id: 4,
    date: "7/22/2026",
    description: "Internet bill",
    amount: 3000,
    category: "utilities",
    status: "paid",
  },
  {
    id: 5,
    date: "7/21/2026",
    description: "Fuel for car",
    amount: 5000,
    category: "transport",
    status: "paid",
  },
  {
    id: 6,
    date: "7/20/2026",
    description: "Dinner with family",
    amount: 3500,
    category: "food",
    status: "pending",
  },
];

export const dropDownListDummy = [
  {
    value: "Bills",
    id: 1,
  },
  {
    value: "School fee",
    id: 2,
  },
  {
    value: "Milk",
    id: 3,
  },
];

export type CategoryType = {
  id: number;
  categoryName: string;
  iconName: keyof typeof iconMap;
  color: string;
};

export const categoryList: CategoryType[] = [
  {
    id: 1,
    categoryName: "Home",
    iconName: "home",
    color: "#ADC6FF",
  },
  {
    id: 2,
    categoryName: "Home",
    iconName: "transport",
    color: "#ADC6FF",
  },
  {
    id: 3,
    categoryName: "Home",
    iconName: "food",
    color: "#ADC6FF",
  },
];
