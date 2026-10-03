export type ButtonListType = {
  title: string;
  id: number;
  type: "Expense" | "Income";
};

export const buttonList: ButtonListType[] = [
  { title: "Expense", id: 1, type: "Expense" },
  { title: "Income", id: 2, type: "Income" },
];
