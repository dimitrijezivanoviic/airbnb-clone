import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/3643ec104098983.5f5b5ea7c10c5.png"
        layout="fill"
        objectFit="cover"
        alt=""
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-xl text-white font-bold ">
          Not sure where to go? Perfect.
        </p>

        <button className="text-purple-500 bg-white px-5 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          {" "}
          I am flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
