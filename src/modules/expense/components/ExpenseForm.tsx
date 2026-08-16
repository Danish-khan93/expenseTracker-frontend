import { useForm } from "react-hook-form";
import {
  CustomButton,
  CustomDatePicker,
  CustomInput,
  CustomSelectBox,
  CustomText,
} from "../../../components";
import { dropDownListDummy } from "../../../constant/dummy";

type ExpenseForm = {
  amount: number;
  title: string;
  expenseCategoryId: number;
  expenseCategoryName: string;
  paymentMetodeId: number;
  paymentMetodeName: string;
  note: string;
  date: string;
};

const ExpenseForm = () => {
  const { register, handleSubmit, setValue } = useForm<ExpenseForm>({
    defaultValues: {
      amount: 0,
      title: "",
      expenseCategoryId: 0,
      expenseCategoryName: "",
      paymentMetodeId: 0,
      paymentMetodeName: "",
      note: "",
      date: "",
    },
  });

  const onSubmit = (data: ExpenseForm) => {
    console.log(data);
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
        <div>
          <CustomButton icon="save" variant="textIcon" type="submit">
            Save Transaction
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
          setter={setValue}
          register={register}
          name="expenseCategoryId"
          setName="expenseCategoryName"
          label="Category"
          dropDownList={dropDownListDummy}
        />
        <CustomSelectBox
          setter={setValue}
          register={register}
          name="paymentMetodeId"
          setName="paymentMetodeName"
          label="Payment Type"
          dropDownList={dropDownListDummy}
        />
        <CustomInput
          icon={false}
          type="text"
          label={"Notes"}
          name={"note"}
          register={register}
          formatType="lowerCase"
        />
        <CustomDatePicker label={"Date"} name="date" register={register} />
      </div>
    </form>
  );
};

export default ExpenseForm;
