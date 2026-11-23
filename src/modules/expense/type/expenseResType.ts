export type ExpenseListType = {
  id: number;
  title: string;
  amount: number;
  categoryId: number;
  categoryName: string;
  paymentType:
    | "Cash"
    | "BankTransfer"
    | "OnlinePayment"
    | "DebitCard"
    | "CreditCard"
    | "Cheque"
    | "DigitalWallet";
  note: string;
  dateOfPayment: string;
  status: "Paid" | "Pending" | "Rejected";
};

export type SingleExpenseType = {
  id: number;
  title: string;
  amount: number;
  expenseCategoryId: number;
  expenseCategoryName: string;
  note: string;
  dateOfPayment: string;
  // paymentMetodeId: number;
  paymentMetodeName:
    | "Cash"
    | "BankTransfer"
    | "OnlinePayment"
    | "DebitCard"
    | "CreditCard"
    | "Cheque"
    | "DigitalWallet";
  // statusId: number;
  statusName: "Paid" | "Pending" | "Rejected";
};

export type ExpenseInitialValues = {
  expense: ExpenseListType[];
  singleExpense: SingleExpenseType | null;
  loading: boolean;
  error: null | string;
};
