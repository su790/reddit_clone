import { signOut, signIn, useSession } from "next-auth/react";
import React from "react";

function Login() {
  const { data: sessionData } = useSession();
  console.log("Session data from login page", sessionData?.user?.id);
  return (
    <div>
      <button
        className="m-2 rounded-full bg-primary-700 px-3 py-2 font-sans"
        onClick={
          sessionData
            ? () => void signOut()
            : () =>
                void signIn("google", { callbackUrl: "http://localhost:3000" })
        }
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}

export default Login;
