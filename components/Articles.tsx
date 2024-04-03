import React from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";

export default function Articles() {
  return (
    <div className="flex flex-col items-center py-4 ">
      <h1 className="text-2xl font-medium">Popular stories</h1>

      <div className="flex flex-wrap gap-10">
        <div className="flex  py-10 max-w-[30em]">
          <div className="flex flex-col px-1">
            <Image src="/frog.jpg" width={500} height={500} alt="frog" />

            <h1 className="text-2xl py-2 hover:underline">Title goes here</h1>

            <p>June 2, 2022</p>

            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              sequi minus molestiae, sapiente culpa nam possimus vitae dolorum
              pariatur temporibus.
            </p>

            <div className="flex items-center">
              <FaRegUser size={20} />
              <span className="flex p-1">by: </span>
              <p>Nelson Mandela</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
