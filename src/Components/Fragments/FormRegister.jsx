import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Fullname" name="fullname" type="text" placeholder="insert your name" />
      <InputForm label="Email" name="email" type="email" placeholder="example@mail.com" />
      <InputForm label="Password" name="password" type="password" placeholder="*******" />
      <InputForm label="Confirm Password" name="confirmPasword" type="password" placeholder="*******" />
      <Button classname="bg-emerald-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
