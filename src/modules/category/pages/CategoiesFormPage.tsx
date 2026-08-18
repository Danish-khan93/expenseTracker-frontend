import { useForm } from "react-hook-form";
import { CustomButton, CustomInput, CustomText } from "../../../components";
import IconSelection from "../components/IconSelection";
import ColorSelection from "../components/ColorSelection";
import type { iconMap } from "../../../constant/iconMap";
import CategoryPreview from "../components/CategoryPreview";

export type CategoryFormType = {
  categoryName: string;
  color: string;
  icon: keyof typeof iconMap;
  description: string;
};

const CategoiesFormPage = () => {
  const { register, handleSubmit, setValue, control } =
    useForm<CategoryFormType>({
      defaultValues: {
        categoryName: "",
        color: "",
        icon: "home",
        description: "",
      },
    });

  const onSubmit = (values: CategoryFormType) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <div className="text-white ">
          <CustomText variant="h2">Category Management</CustomText>
          <CustomText variant="p">
            Define custom spending buckets to organize your financial flow with
            precision.
          </CustomText>
        </div>
      </div>
      <form
        className="border border-[#C2C6D6] bg-[#1C1B1D] rounded-md p-4 flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <CustomInput
          label="Category Name"
          type="text"
          icon={false}
          name={"categoryName"}
          register={register}
          formatType="capitalCase"
        />
        <IconSelection
          name={"icon"}
          setter={setValue}
          label={"Icon Selection"}
        />
        <ColorSelection
          name={"color"}
          setter={setValue}
          label={"Color Selection"}
        />
        <CustomInput
          label="Description"
          type="text"
          icon={false}
          name={"description"}
          register={register}
          formatType={"lowerCase"}
        />
        <hr className="w-full border border-[#e7e0ed] my-5" />
        <div className="flex justify-end items-center gap-3">
          <CustomButton minWidth="200px" type={"submit"}>
            Save
          </CustomButton>
          <CustomButton minWidth="200px" type={"button"}>
            Cancel
          </CustomButton>
        </div>
      </form>
      <CategoryPreview control={control} />
    </div>
  );
};

export default CategoiesFormPage;
