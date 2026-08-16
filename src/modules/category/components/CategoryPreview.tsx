import type { FC } from "react";
import { CustomText } from "../../../components";
import CustomIcon from "../../../components/CustomIcon";
import { useWatch, type Control } from "react-hook-form";
import type { CategoryFormType } from "../pages/CategoiesFormPage";
type Props = {
  control: Control<CategoryFormType>;
};

const CategoryPreview: FC<Props> = (props) => {
  const { control } = props;

  const formValues = useWatch<CategoryFormType>({
    control,
  });
  console.log(formValues);

  return (
    <div className="text-white">
      <CustomText variant="h3">Live Preview</CustomText>
      <div className="my-5 w-[50%] border border-[#C2C6D6] bg-[#1C1B1D] text-white rounded-md p-2 flex items-center gap-5">
        <div
          style={{
            backgroundColor: formValues.color,
          }}
          className={`w-10 h-10 rounded-md flex justify-center items-center`}
        >
          <CustomIcon iconName={formValues.icon ?? "home"} />
        </div>
        <div className="flex flex-col gap-1">
          <CustomText variant="h6">{formValues.categoryName}</CustomText>
          <CustomText variant="p">Live Preview</CustomText>
        </div>
      </div>
    </div>
  );
};

export default CategoryPreview;
