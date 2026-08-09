import { useForm } from "react-hook-form";
import { CustomInput } from "../../../components";
import IconSelection from "../components/IconSelection";

// form type

type CategoryFormType = {
  categoryName: string;
  color: string;
  icon: string;
  description: string;
};

const CategoiesFormPage = () => {
  const { register, handleSubmit, setValue } = useForm<CategoryFormType>({
    defaultValues: {
      categoryName: "",
      color: "",
      icon: "",
      description: "",
    },
  });

  const onSubmit = (values: CategoryFormType) => {
    console.log(values);
  };

  return (
    <div>
      <div
        className="border border-[#C2C6D6] bg-[#1C1B1D] rounded-md p-2 flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <CustomInput
          label="Category Name"
          type="text"
          icon={false}
          name={"categoryName"}
          register={register}
        />
        <IconSelection name={"icon"} setter={setValue} />
      </div>
      <div>live preview</div>
    </div>
  );
};

export default CategoiesFormPage;
