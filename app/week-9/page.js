"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // // Sign in to Firebase with GitHub authentication
  // await gitHubSignIn();

  // // Sign out of Firebase
  // await firebaseSignOut();

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
          <Link href="/week-9/shopping-list">
            Continue to your Shopping List
          </Link>
        </p>
      ) : (
        <p></p>
      )}
    </main>
  );
}
