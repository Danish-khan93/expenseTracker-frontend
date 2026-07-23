import { CustomButton, CustomTable, CustomText } from "../../../components";
import { useNavigate } from "react-router-dom";
import { expenseCols } from "../../../constant/girdColumn";
const Expense = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white p-2">
      <div className="flex justify-between items-center">
        <div>
          <CustomText variant="h1">Expense</CustomText>
          <CustomText variant="p">
            Track, manage, and analyze your financial footprint.
          </CustomText>
        </div>
        <div>
          <CustomButton
            type="button"
            icon="plus"
            variant="textIcon"
            startIcon={true}
            handleClick={() => {
              console.log("navigate to add expense page");
              navigate("/expense/new");
            }}
          >
            Add Expense
          </CustomButton>
        </div>
      </div>
      {/* <div>filter</div> */}
      <div>
        <CustomTable columns={expenseCols} />
      </div>
    </div>
  );
};

export default Expense;
