import { CustomButton, CustomInput, CustomText } from "../../../components";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <div className="  flex flex-col gap-4 items-start justify-center w-full p-4">
      <div className="w-full">
        <CustomText variant="h2">Welcome back</CustomText>
        <CustomText variant="p">
          Enter your credentials to access your dashboard
        </CustomText>
      </div>

      <form className="w-full flex flex-col gap-2">
        <CustomInput type="text" label="Email" icon={true} iconName={"email"} />
        <CustomInput
          type="password"
          label="Password"
          icon={true}
          iconName={"password"}
        />

        <CustomButton type="submit" variant="text">
          Sign In
        </CustomButton>
      </form>
      <div className="flex items-center gap-2 w-full">
        <hr className="w-auto flex-1" />
        <CustomText variant="p">OR CONTINUE WITH</CustomText>
        <hr className="w-auto flex-1" />
      </div>
      <div className="flex justify-center w-full">
        <CustomText variant="p">
          Don't have an account?
          <Link to="/register" className="text-[#ADC6FF]">
            Create an account
          </Link>
        </CustomText>
      </div>
    </div>
  );
};

export default LoginForm;
