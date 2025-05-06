import Form from "../Components/Form/Form.js";
function LoginPage() {
  const arr = ["Enter name", "Enter password"];
  return <Form title="Login" arr={arr} />;
}

export default LoginPage;
