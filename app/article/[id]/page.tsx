import React from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";

export default function Article() {
  return (
    <div className="flex flex-col items-center py-4 ">
      <div className="flex flex-wrap gap-10">
        <div className="flex  py-10 max-w-[77em]">
          <div className="flex flex-col px-1">
            <h1 className="text-4xl pb-6">Title goes here</h1>

            <div className="flex items-center pb-4 text-xl">
              <FaRegUser size={30} />
              <span className="flex p-1">by: </span>
              <p>Nelson Mandela</p>
            </div>

            <Image
              src="/frog.jpg"
              width={1200}
              height={1500}
              alt="frog"
              priority={true}
            />

            <p className="pt-4">posted on: June 2, 2022</p>

            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              sequi minus molestiae, sapiente culpa nam possimus vitae dolorum
              pariatur temporibus. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Cum vel mollitia nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
