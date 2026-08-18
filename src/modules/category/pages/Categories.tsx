import { useNavigate } from "react-router-dom";
import { CustomSwitch, CustomText } from "../../../components";
import CustomIcon from "../../../components/CustomIcon";
import { buttonList } from "../../../constant/categoryConstant";
import { categoryList, type CategoryType } from "../../../constant/dummy";
import CategoryHighlightsCard from "../components/CategoryHighlightsCard";
import CateogoryCard from "../components/CateogoryCard";
import { useState } from "react";

const Categories = () => {
  const navigate = useNavigate();

  const [categoryType, setCategoryType] = useState<"expense" | "income">(
    "expense",
  );
  console.log(categoryType);

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
          {categoryType === "expense"
            ? categoryList?.map((category: CategoryType) => {
                return (
                  <CateogoryCard
                    key={category?.id}
                    color={category?.color}
                    categoryName={category?.categoryName}
                    iconName={category?.iconName}
                    spending={40}
                  />
                );
              })
            : categoryList?.map((category: CategoryType) => {
                return (
                  <CateogoryCard
                    key={category?.id}
                    color={category?.color}
                    categoryName={category?.categoryName}
                    iconName={category?.iconName}
                    spending={40}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
