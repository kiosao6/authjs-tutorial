import { auth, signOut } from "@/auth";

export default async function SettingsPage() {
  const session = await auth();

  return (
    <div>
      {
        JSON.stringify(session)
      }
      <form action={async() => {
        'use server'
        await signOut();
      }}>
        <button className="text-white p-3 bg-slate-900 rounded" type="submit">
          Log Out
        </button>
      </form>
    </div>

  );
}