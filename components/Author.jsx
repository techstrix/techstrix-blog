import React from "react";
import Image from "next/image";
const Author = ({ author }) => {
  return (
    <div className="text-center  mt-20 mb-8 p-12 relative rounded bg-black bg-opacity-20">
      <div className="absolute  left-0  right-0 -top-4 align-middle">
        <Image
          unoptimized
          src={author.photo.url}
          alt={author.name}
          height={100}
          width={100}
          className=" rounded-full align-middle"
        />
      </div>

      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
