import { LoginForm } from "@/components/auth/login-form";

const LoginPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[90svh] w-full bg-main-light dark:bg-main-dark">
      <LoginForm />
    </main>
  );
};

export default LoginPage;
