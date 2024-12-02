import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
      // username: "johnd",
      // password: "m38rmF$",
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm label="Username" name="username" type="text" placeholder="Sally Graves" ref={usernameRef} />
      <InputForm label="Password" name="password" type="password" placeholder="*******" />
      {loginFailed && <p className="text-red-500 mb-4">{loginFailed}</p>}
      <Button classname="bg-emerald-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
