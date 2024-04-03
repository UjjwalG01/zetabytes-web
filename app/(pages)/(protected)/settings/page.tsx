import { auth, signOut } from "@/auth";

export const runtime = "edge";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <main className="min-h-screen container">
      <pre>{JSON.stringify(session)}</pre>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </main>
  );
};

export default SettingsPage;
