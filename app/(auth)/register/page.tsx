import { RegisterForm } from "@/components/auth/register-form";

const RegisterPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[90svh] w-full bg-main-light dark:bg-main-dark">
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
