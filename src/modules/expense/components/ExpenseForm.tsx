import {
  CustomButton,
  CustomInput,
  CustomSelectBox,
  CustomText,
} from "../../../components";
import { dropDownListDummy } from "../../../constant/dummy";

const ExpenseForm = () => {
  return (
    <div>
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
        <CustomInput type="text" label={"Transiction Type"} />
        <CustomInput type="number" label={"Amount"} />
        <CustomSelectBox
          name="category"
          label="Category"
          dropDownList={dropDownListDummy}
        />
        <CustomSelectBox
          name="paymentType"
          label="Payment Type"
          dropDownList={dropDownListDummy}
        />
        <CustomInput type="text" label={"Notes"} />
      </div>
    </div>
  );
};

export default ExpenseForm;
