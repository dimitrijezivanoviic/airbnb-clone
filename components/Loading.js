import React from "react";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://logos-world.net/wp-content/uploads/2020/07/Airbnb-Logo.png"
          height={400}
          width={400}
          objectFit="contain"
          alt="Airbnb logo"
        />
        <h1 className="text-red-400 font-bold text-lg mt-5">Loading...</h1>
      </div>
    </center>
  );
}

export default Loading;
