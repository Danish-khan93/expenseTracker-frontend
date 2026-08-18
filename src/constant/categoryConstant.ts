export type ButtonListType = {
  title: string;
  id: number;
  type: "expense" | "income";
};

export const buttonList: ButtonListType[] = [
  { title: "Expense", id: 1, type: "expense" },
  { title: "Income", id: 2, type: "income" },
];
