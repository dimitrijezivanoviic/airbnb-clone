import React from "react";
import Image from "next/image";
import { useUserAuth } from "../context/UserAuthContext";
import { useRouter } from "next/router";
// import Link from "next/link";

function Login() {
  const { googleSignIn } = useUserAuth();
  const router = useRouter();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      await googleSignIn();
      router.push("/");
    } catch (err) {
      console.log(err.message);
    }
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
        onClick={handleGoogleSignIn}
        className="p-5 bg-red-500 rounded-full text-white text-center cursor-pointer"
      >
        Login with Google
      </h1>
    </div>
  );
}

export default Login;
