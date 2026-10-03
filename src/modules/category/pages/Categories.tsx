import { useNavigate } from "react-router-dom";
import { CustomSwitch, CustomText } from "../../../components";
import CustomIcon from "../../../components/CustomIcon";
import { buttonList } from "../../../constant/categoryConstant";
import { type CategoryType } from "../../../constant/dummy";
import CategoryHighlightsCard from "../components/CategoryHighlightsCard";
import CateogoryCard from "../components/CateogoryCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../redux/category.action";
import type { AppDispatch, RootState } from "../../../app/store";
import LoaderSvg from "../../../components/LoaderSvg";

const Categories = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { expense, loading } = useSelector((state: RootState) => {
    return state?.Category;
  });

  const navigate = useNavigate();

  const [categoryType, setCategoryType] = useState<"Expense" | "Income">(
    "Expense",
  );
  console.log(categoryType);

  useEffect(() => {
    dispatch(getAllCategories(categoryType));
  }, [categoryType]);

  return (
    <div className="text-white">
      <div className="flex justify-between items-end">
        <div>
          <CustomText variant="h1">Financial Taxonomy</CustomText>
          <CustomText variant="p">
            Organize your flow of capital across personalized buckets.
          </CustomText>
        </div>
        <div>
          <CustomSwitch
            listButton={buttonList}
            setCategoryType={setCategoryType}
          />
        </div>
      </div>
      {loading ? (
        <LoaderSvg />
      ) : (
        <div>
          <div className="my-4 grid grid-cols-3 gap-3">
            <CategoryHighlightsCard
              title="Most used"
              categoryName="Food"
              iconName="food"
              color="#DF7412"
            />
            <CategoryHighlightsCard
              title="Top Budget"
              categoryName="Transport"
              iconName="transport"
              color="#DF7412"
            />
            <div
              onClick={() => {
                navigate("/categories/form");
              }}
              className="cursor-pointer border border-dashed border-[#C2C6D6] bg-[#1C1B1D] flex justify-center items-center gap-4 rounded-md"
            >
              <CustomIcon iconName="plus" />
              <CustomText variant="p">Add Category</CustomText>
            </div>
          </div>
          <div className="my-2 grid grid-cols-3 gap-3">
            {categoryType === "Expense"
              ? expense?.map((category: CategoryType) => {
                  return (
                    <CateogoryCard
                      key={category?.id}
                      color={category?.color}
                      categoryName={category?.categoryName}
                      iconName={category?.icon}
                      spending={40}
                      id={category?.id}
                    />
                  );
                })
              : expense?.map((category: CategoryType) => {
                  return (
                    <CateogoryCard
                      key={category?.id}
                      color={category?.color}
                      categoryName={category?.categoryName}
                      iconName={category?.icon}
                      spending={40}
                      id={category?.id}
                    />
                  );
                })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
