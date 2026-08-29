import { CustomText } from "../../../components";
import { budgetSummaryData } from "../../../constant/dummy";
import BudgetCard from "../components/BudgetCard";
import BudgetSummary from "../components/BudgetSummary";

const Budgets = () => {
  return (
    <div className="text-white">
      <div>
        <CustomText variant="h1">Budget</CustomText>
        <CustomText variant="p">
          Real-time spending tracking across your primary accounts.
        </CustomText>
      </div>
      <div className="my-5 flex justify-evenly">
        {budgetSummaryData?.map((val) => {
          return <BudgetSummary data={val} key={val?.id} />;
        })}
      </div>
      <div className="my-5">
        <BudgetCard />
      </div>
    </div>
  );
};

export default Budgets;
