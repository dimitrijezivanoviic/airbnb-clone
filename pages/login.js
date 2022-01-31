import React from "react";
import Image from "next/image";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <div className="grid place-items-center">
      <Image
        src="https://logos-world.net/wp-content/uploads/2020/07/Airbnb-Logo.png"
        height={400}
        width={400}
        objectFit="contain"
        alt="Airbnb logo"
      />
      <h1
        onClick={signIn}
        className="p-5 bg-red-500 rounded-full text-white text-center cursor-pointer"
      >
        Login with Google
      </h1>
    </div>
  );
}

export default Login;
