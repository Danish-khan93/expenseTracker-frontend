import { useForm } from "react-hook-form";
import { CustomButton, CustomInput, CustomText } from "../../../components";
import { Link, useNavigate } from "react-router-dom";
import { apiHandler } from "../../../api/apihandler";
import type { AuthResponseType } from "../auth.type";
import { toast } from "react-toastify";
import { useState } from "react";
import type { ApiResponse, ErrorType } from "../../../type/golbalTypes";

type LoginFormType = {
  email: string;
  password: string;
};

type TRequest = LoginFormType;

const LoginForm = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { register, handleSubmit } = useForm<LoginFormType>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // form submit function

  const onSubmit = async (values: LoginFormType) => {
    
    try {
      const response = await apiHandler<
        TRequest,
        ApiResponse<AuthResponseType>
      >("post", "/auth/login", values);
      localStorage.setItem("user", JSON.stringify(response?.data));
      toast.success("Login Successfully");
      navigate("/dashboard");
    } catch (error) {
      const err = error as ErrorType;
      setIsLoading(false);
      toast.error(err?.message);
    }
  };

  return (
    <div className="  flex flex-col gap-4 items-start justify-center w-full p-4">
      <div className="w-full">
        <CustomText variant="h2">Welcome back</CustomText>
        <CustomText variant="p">
          Enter your credentials to access your dashboard
        </CustomText>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-2"
      >
        <CustomInput
          type="email"
          label="Email"
          icon={true}
          iconName={"email"}
          name={"email"}
          register={register}
          formatType="lowerCase"
        />
        <CustomInput
          formatType="lowerCase"
          name={"password"}
          register={register}
          type="password"
          label="Password"
          icon={true}
          iconName={"password"}
        />

        <CustomButton type="submit" variant="text" loading={isLoading}>
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
