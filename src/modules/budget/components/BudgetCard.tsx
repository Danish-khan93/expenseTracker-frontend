import { CustomProgressBar, CustomText } from "../../../components";
import CustomIcon from "../../../components/CustomIcon";

const BudgetCard = () => {
  return (
    <div className="text-white relative flex flex-col items-left flex-1 gap-3 p-2 mx-1 rounded-md border border-[#C2C6D6] bg-[#292a2c]">
      {
        <div className="rounded-bl-md p-2  border border-[#C2C6D6] absolute top-0 right-0">
          <CustomText variant="p">overdue</CustomText>
        </div>
      }
      
      <div className="mt-10 flex justify-between items-center w-[80%]">
        <div className="flex gap-2 items-center">
          <div
            style={{
              backgroundColor: "yellow",
            }}
            className="w-10 h-10 p-2 flex justify-center items-center rounded-md"
          >
            <CustomIcon iconName={"home"} />
          </div>
          <div>
            <CustomText variant="h6">{"category"}</CustomText>
            <CustomText variant="h6">{"lastexpenseDetails"}</CustomText>
          </div>
        </div>
        <div>
          <CustomText variant="p">{"budgetamount"}</CustomText>
          <CustomText variant="p">{"/ expenseamount"}</CustomText>
        </div>
      </div>
      <div>
        <CustomProgressBar />
      </div>
    </div>
  );
};

export default BudgetCard;
