import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Login"
      headerDescription="Welcome back! Get In."
      backButtonLabel="Dont't have an account?"
      backButtonHref="/register"
      showSocial={true}
    >
      <div>Hello Login form</div>
    </CardWrapper>
  );
};
