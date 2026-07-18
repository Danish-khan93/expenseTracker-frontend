import { CustomButton, CustomInput } from "./components";

const App = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      <CustomButton type="button" variant="text">
        Click Me
      </CustomButton>
      <CustomButton
        variant={"textIcon"}
        type="button"
        icon="printer"
        minWidth="w-lg"
      >
        Click Me
      </CustomButton>

      <CustomButton variant={"icon"} type="button" icon="printer" />

      <CustomInput type="password" />
      <CustomInput type="text" />
      <CustomInput type="text" iconName="profile" icon={true} />
    </div>
  );
};

export default App;
