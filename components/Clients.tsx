"use client";

import React from "react";

import { companies } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        
        <span className="text-purple">Tech Stack</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-8 lg:gap-12 mt-6 py-10">
  {companies.map((company) => (
    <React.Fragment key={company.id}>
      <div className="flex items-center gap-2">
        <img
          src={company.img}
          // alt={company.name}
          className="w-10 md:w-14 lg:w-16"
        />
        <img
          // src={company.nameImg}
          // alt={company.name}
          className="w-20 md:w-28 lg:w-32"
        />
      </div>
    </React.Fragment>
  ))}
</div>

</div>

  
      
  );
};

export default Clients;
