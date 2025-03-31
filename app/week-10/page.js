"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Async function to handle sign-in
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  // Async function to handle sign-out
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <main>
      <h3 className="text-3xl font-bold pb-2">Shopping List App</h3>

      {user ? (
        <div>
          <p>{`Signed in as ${user.displayName} (${user.email})`}</p>

          <button onClick={firebaseSignOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={gitHubSignIn}>Sign In with GitHub</button>
      )}

      {user ? (
        <p>
          <Link href="/week-10/shopping-list">
            Continue to your Shopping List
          </Link>
        </p>
      ) : (
        <p></p>
      )}
    </main>
  );
}
