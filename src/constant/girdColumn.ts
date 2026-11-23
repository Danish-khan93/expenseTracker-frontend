export type ExpenseResType = {
  amount: number;
  title: string;
  categoryName: string;
  paymentMetodeName: string;
  note: string;
  dateOfPayment: string;
  status: string;
};

export type ColumnType<T> = {
  header: string;
  minWidth?: string;
  width?: number;
  align?: "left" | "center" | "right";
  value: keyof T;
  highlight?: boolean;
};

export const expenseCols: ColumnType<ExpenseResType>[] = [
  {
    header: "Date",
    align: "left",
    minWidth: "w-[120px]",
    value: "dateOfPayment",
  },
  {
    value: "note",
    header: "Description",
    align: "center",
  },
  {
    value: "amount",
    header: "Amount",
    align: "center",
  },
  {
    value: "categoryName",
    header: "Category",
    align: "center",
  },
  {
    value: "status",
    header: "Status",
    align: "center",
    highlight: true,
  },
];

export const incomeCols: ColumnType<ExpenseResType>[] = [
  // {
  //   header: "Date",
  //   align: "left",
  //   minWidth: "w-[120px]",
  //   value: "date",
  // },
  // {
  //   value: "description",
  //   header: "Description",
  //   align: "center",
  // },
  // {
  //   value: "amount",
  //   header: "Amount",
  //   align: "center",
  // },
  // {
  //   value: "category",
  //   header: "Category",
  //   align: "center",
  // },
  // {
  //   value: "status",
  //   header: "Status",
  //   align: "center",
  //   highlight: true,
  // },
];
