import { useForm } from "react-hook-form";
import {
  CustomButton,
  CustomDatePicker,
  CustomInput,
  CustomSelectBox,
  CustomText,
} from "../../../components";
// import { paymentMethodsTypes } from "../../../constant/dummy";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";
import { useEffect, useLayoutEffect } from "react";
import { getAllCategories } from "../../category/redux/category.action";
import { apiHandler } from "../../../api/apihandler";
import { toast } from "react-toastify";
import type { ApiResponse, ErrorType } from "../../../type/golbalTypes";
import { useNavigate, useParams } from "react-router-dom";
import type { ExpenseResType } from "../../../constant/girdColumn";
import { getExpensesById } from "../redux/expenseAction";

type ExpenseForm = {
  amount: number;
  title: string;
  expenseCategoryId: number;
  expenseCategoryName: string;
  paymentMetodeId?: number;
  paymentMetodeName: string;
  note: string;
  dateOfPayment: string;
  statusId?: number;
  statusName: string;
};

const ExpenseForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { id } = useParams();
  const expense = useSelector((state: RootState) => {
    return state?.Category?.expense;
  });

  // get single expense data

  const { singleExpense } = useSelector((state: RootState) => {
    return state?.Expense;
  });

  useEffect(() => {
    if (id) {
      const paramId = Number(id);
      dispatch(getExpensesById(paramId));
    }
  }, [id]);

  useLayoutEffect(() => {
    if (expense?.length === 0) {
      dispatch(getAllCategories("Expense"));
    }
  }, [expense?.length]);

  const emptyForm: ExpenseForm = {
    amount: 0,
    title: "",
    expenseCategoryId: 0,
    expenseCategoryName: "",
    paymentMetodeId: 0,
    paymentMetodeName: "",
    note: "",
    dateOfPayment: "",
    statusId: 0,
    statusName: "",
  };

  // const formInitialValues = id ? (singleExpense ?? emptyForm) : emptyForm;

  const { register, handleSubmit, setValue, reset } = useForm<ExpenseForm>({
    defaultValues: emptyForm,
  });

  useEffect(() => {
    if (id && singleExpense) {
      reset({
        ...singleExpense,
      });
    }
  }, [id, singleExpense, reset]);

  const onSubmit = async (data: ExpenseForm) => {
    // create expense form
    try {
      const response = await apiHandler<
        ExpenseForm,
        ApiResponse<ExpenseResType>
      >("post", "/expense/createExpense", data);
      if (response?.status === "success") {
        toast.success(response?.message);
        navigate("/expense");
      }
    } catch (error) {
      const err = error as ErrorType;
      toast.error(err?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between items-center">
        <div className="text-white ">
          <CustomText variant="h2">Record Expense</CustomText>
          <CustomText variant="p">
            Track your spending with high pricison
          </CustomText>
        </div>
        <div className="flex gap-2 w-[50%]">
          <CustomButton icon="save" variant="textIcon" type="submit">
            {id ? "Update Transaction" : "Save Transaction"}
          </CustomButton>
          <CustomButton
            variant="text"
            type="button"
            handleClick={() => {
              navigate("/expense");
            }}
          >
            Cancel
          </CustomButton>
        </div>
      </div>
      <div className="p-4 border border-white my-10 rounded-md bg-[#18181B] grid grid-cols-3 gap-2">
        <CustomInput
          icon={false}
          type="text"
          label={"Transiction Title"}
          name={"title"}
          register={register}
          formatType="capitalCase"
        />
        <CustomInput
          icon={false}
          type="number"
          label={"Amount"}
          name={"amount"}
          register={register}
          formatType="lowerCase"
        />
        <CustomSelectBox
          selectAll={true}
          setter={setValue}
          register={register}
          name="expenseCategoryId"
          setName="expenseCategoryName"
          label="Category"
          dropDownList={expense?.map((items) => {
            return {
              id: items.id,
              value: items.categoryName,
              label: items.categoryName,
            };
          })}
        />
        <CustomSelectBox
          selectAll={true}
          setter={setValue}
          register={register}
          name="paymentMetodeId"
          setName="paymentMetodeName"
          label="Payment Type"
          // dropDownList={paymentMethodsTypes}
          url="/dropDowns/getAllPaymentType"
        />
        <CustomSelectBox
          selectAll={true}
          setter={setValue}
          register={register}
          name="statusId"
          setName="statusName"
          label="Status"
          url="/dropDowns/getStatus"
        />
        <CustomInput
          icon={false}
          type="text"
          label={"Notes"}
          name={"note"}
          register={register}
          formatType="lowerCase"
        />
        <CustomDatePicker
          label={"Date"}
          name="dateOfPayment"
          register={register}
        />
      </div>
    </form>
  );
};

export default ExpenseForm;
