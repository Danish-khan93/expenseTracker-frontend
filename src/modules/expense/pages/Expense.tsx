import { CustomButton, CustomTable, CustomText } from "../../../components";
import { useNavigate } from "react-router-dom";
import { expenseCols } from "../../../constant/girdColumn";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllExpenses } from "../redux/expenseAction";
import type { AppDispatch, RootState } from "../../../app/store";
const Expense = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const { expense } = useSelector((state: RootState) => {
    return state.Expense;
  });

  const rows = expense?.length > 0 ? expense : [];

  useEffect(() => {
    dispatch(getAllExpenses());
  }, []);

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
              navigate("/expense/new");
            }}
          >
            Add Expense
          </CustomButton>
        </div>
      </div>
      {/* <div>filter</div> */}
      <div>
        <CustomTable
          columns={expenseCols}
          rows={rows}
          navigateById={true}
          textPosition="left"
        />
      </div>
    </div>
  );
};

export default Expense;
