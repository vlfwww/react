import Form from "../Components/Form/Form.js";
function SignUpPage() {
  const arr = ["Enter name", "Enter email",'Enter password','Confirm password'];
  return <Form title="Sign Up" arr={arr} />;
}

export default SignUpPage;
