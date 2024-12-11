import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  console.log(isDarkMode);

  return (
    <div
      className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-primary text-slate-400"}`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute right-10 top-5 bg-emerald-600 p-2  text-white rounded hover-opacity-animation"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-emerald-600">{title}</h1>
        <p className="font-medium  mb-8">Welcome, Please enter your details</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className=" mt-3">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="text-emerald-600 font-bold hover-opacity-animation">
          Register
        </Link>
      </p>
    );
  } else if (type === "register") {
    return (
      <p className=" mt-3">
        Already have an account?{" "}
        <Link to="/login" className="text-emerald-600 font-bold hover-opacity-animation">
          Login
        </Link>
      </p>
    );
  }
};
export default AuthLayout;
