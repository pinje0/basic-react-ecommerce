import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center bg-primary">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-emerald-600">{title}</h1>
        <p className="font-medium text-slate-400 mb-8">Welcome, Please enter your details</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-slate-400 mt-3">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="text-emerald-600 font-bold hover-opacity-animation">
          Register
        </Link>
      </p>
    );
  } else if (type === "register") {
    return (
      <p className="text-slate-400 mt-3">
        Already have an account?{" "}
        <Link to="/login" className="text-emerald-600 font-bold hover-opacity-animation">
          Login
        </Link>
      </p>
    );
  }
};
export default AuthLayout;
