import { CustomButton, CustomInput } from "./components";

const App = () => {
  return (
    <div>
      <CustomButton type="button" variant="text">
        Click Me
      </CustomButton>
      <CustomButton variant={"textIcon"} type="button" icon="printer">
        Click Me
      </CustomButton>
      <CustomInput />
    </div>
  );
};

export default App;
