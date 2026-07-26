export type ExpenseResType = {
  date: string;
  description: string;
  amount: number;
  category: string;
  status: string;
};

export type ColumnType<T> = {
  header: string;
  minWidth?: string;
  width?: number;
  align?: "left" | "center" | "right";
  value: keyof T;
};

export const expenseCols: ColumnType<ExpenseResType>[] = [
  {
    header: "Date",
    align: "left",
    minWidth: "w-[120px]",
    value: "date",
  },
  {
    value: "description",
    header: "Description",
    align: "center",
  },
  {
    value: "amount",
    header: "Amount",
    align: "center",
  },
  {
    value: "category",
    header: "Category",
    align: "center",
  },
  {
    value: "status",
    header: "Status",
    align: "center",
  },
];
