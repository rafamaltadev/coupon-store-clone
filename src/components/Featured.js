import React from "react";
import ItemCard from "./ItemCard";

const Featured = ({ endpoint: { title, description, items } }) => {
  return (
    <>
      <div className="w-11/12 m-auto">
        <h2>{title}</h2>
        <p className="">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  items-center justify-items-center gap-3 mt-7">
          {items?.map((item, i) => (
            <ItemCard {...item} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Featured;
