import { useForm } from "react-hook-form";
import { CustomButton, CustomInput, CustomText } from "../../../components";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../auth.schema";
import { apiHandler } from "../../../api/apihandler";
import { useState } from "react";
import { toast } from "react-toastify";
import type { ErrorTyp, ResponseType } from "../auth.type";
import { useNavigate } from "react-router-dom";
type SignupFormType = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormType>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(signupSchema),
  });

  // signupform
  const onSubmit = async (values: SignupFormType) => {
    setIsLoading(true);
    const { confirmPassword, ...payload } = values;

    try {
      const res = await apiHandler<typeof payload, ResponseType>(
        "post",
        "/auth/register",
        payload,
      );
      setIsLoading(false);
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res));
      toast.success("Login Successfully");
      navigate("/dashboard");
    } catch (error) {
      const err = error as ErrorTyp;
      setIsLoading(false);
      toast.error(err?.message);
      console.log(error);
    }
  };

  return (
    <div className="  flex flex-col gap-4 items-start justify-center w-full p-4">
      <div className="w-full">
        <CustomText variant="h2">Create your account</CustomText>
        <CustomText variant="p">
          Start managing your precision finance journey today.
        </CustomText>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-2"
      >
        <CustomInput
          name="fullName"
          register={register}
          type="text"
          label="Full Name"
          icon={true}
          iconName="profile"
          formatType="capitalCase"
          error={errors.fullName?.message}
        />
        <CustomInput
          name="email"
          register={register}
          type="email"
          label="Email"
          icon={true}
          iconName={"email"}
          error={errors.email?.message}
        />
        <CustomInput
          name="password"
          register={register}
          type="password"
          label="Password"
          icon={true}
          iconName={"password"}
          error={errors.password?.message}
        />
        <CustomInput
          name="confirmPassword"
          register={register}
          type="password"
          label="Confirm Password"
          icon={true}
          iconName={"shield"}
          error={errors.confirmPassword?.message}
        />
        <CustomButton type="submit" variant="text" loading={isLoading}>
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
