export type ColumnType = {
  header: string;
  minWidth?: string;
  width?: number;
  align?: "left" | "center" | "right";
};

export const expenseCols: ColumnType[] = [
  {
    header: "Date",
    align: "left",
    minWidth: "w-[120px]",
  },
  {
    header: "Description",
    align: "center",
  },
  {
    header: "Amount",
    align: "center",
  },
  {
    header: "Category",
    align: "center",
  },
  {
    header: "Status",
    align: "center",
  },
];
