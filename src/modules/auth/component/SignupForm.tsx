import { CustomButton, CustomInput, CustomText } from "../../../components";
import { Link } from "react-router-dom";
const SignUpForm = () => {
  return (
    <div className="  flex flex-col gap-4 items-start justify-center w-full p-4">
      <div className="w-full">
        <CustomText variant="h2">Create your account</CustomText>
        <CustomText variant="p">
          Start managing your precision finance journey today.
        </CustomText>
      </div>
      <form className="w-full flex flex-col gap-2">
        <CustomInput
          type="text"
          label="Full Name"
          icon={true}
          iconName="profile"
        />
        <CustomInput type="text" label="Email" icon={true} iconName={"email"} />
        <CustomInput
          type="password"
          label="Password"
          icon={true}
          iconName={"password"}
        />
        <CustomInput
          type="password"
          label="Confirm Password"
          icon={true}
          iconName={"shield"}
        />
        <CustomButton type="submit" variant="text">
          Create Account
        </CustomButton>
      </form>
      <div className="flex items-center gap-2 w-full">
        <hr className="w-auto flex-1" />
        <CustomText variant="p">OR CONTINUE WITH</CustomText>
        <hr className="w-auto flex-1" />
      </div>
      <div className="flex justify-center w-full">
        <CustomText variant="p">
          Already have an account?
          <Link to="/" className="text-[#ADC6FF]">
            Log in
          </Link>
        </CustomText>
      </div>
    </div>
  );
};

export default SignUpForm;
