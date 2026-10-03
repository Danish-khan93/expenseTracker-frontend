import { useForm } from "react-hook-form";
import {
  CustomButton,
  CustomInput,
  CustomSelectBox,
  CustomText,
} from "../../../components";
import IconSelection from "../components/IconSelection";
import ColorSelection from "../components/ColorSelection";
import type { iconMap } from "../../../constant/iconMap";
import CategoryPreview from "../components/CategoryPreview";
import { categoryTypeDropDown } from "../cateogyConstant";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../app/store";
import { createCategory } from "../redux/category.action";
import { toast } from "react-toastify";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export type CategoryFormType = {
  categoryName: string;
  categoryType: "Income" | "Expense";
  categoryTypeId: number;
  color: string;
  icon: keyof typeof iconMap;
  description: string;
};

const CategoiesFormPage = () => {
  const dispatch = useDispatch<AppDispatch>();
const navigate = useNavigate()
  const { register, handleSubmit, setValue, control } =
    useForm<CategoryFormType>({
      defaultValues: {
        categoryName: "",
        categoryType: "Expense",
        categoryTypeId: 1,
        color: "",
        icon: "home",
        description: "",
      },
    });

  const onSubmit = async (values: CategoryFormType): Promise<void> => {
    try {
      console.log(values);
      const res = await dispatch(createCategory(values)).unwrap();
      console.log(res);
      if (res?.status === "success") {
        toast.success(res?.message);
        navigate("/categories")
      }
    } catch (error) {
      const err = error as AxiosError;
      toast.error(err?.message);
    }
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
        <div className="flex justify-between gap-3">
          <div className="flex flex-1">
            <CustomInput
              label="Category Name"
              type="text"
              icon={false}
              name={"categoryName"}
              register={register}
              formatType="capitalCase"
            />
          </div>
          <div className="flex flex-1">
            <CustomSelectBox
              selectAll={false}
              dropDownList={categoryTypeDropDown}
              name={"categoryTypeId"}
              label={"Category Type"}
              register={register}
              setName="categoryType"
              setter={setValue}
            />
          </div>
        </div>
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
