import LoginForm from "../component/LoginForm";

console.log(import.meta.env.VITE_BASE_URL)

const Login = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
