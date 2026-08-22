
import { CustomButton, CustomTable, CustomText } from "../../../components";
import { useNavigate } from "react-router-dom";
import {  incomeCols } from "../../../constant/girdColumn";
import { expenseDummy } from "../../../constant/dummy";
const Income = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white p-2">
      <div className="flex justify-between items-center">
        <div>
          <CustomText variant="h1">Income</CustomText>
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
              navigate("/income/new");
            }}
          >
            Add Income
          </CustomButton>
        </div>
      </div>
      {/* <div>filter</div> */}
      <div>
        <CustomTable
          columns={incomeCols}
          rows={expenseDummy}
          navigateById={true}
          textPosition="left"
        />
      </div>
    </div>
  );
};

export default Income;
