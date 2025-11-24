import React from "react";
import { Link } from "react-router";

const PlantCard = ({ plant }) => {
    const {image,price,category,id} =plant;
  console.log(plant);


  return (
    <div className="">
      <div className="card bg-base-100 w-96 shadow-sm object-cover">
        <figure className="h-[260px] overflow-hidden">
          <img className="w-full h-full object-cover"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"></h2>
          <p>Category: {category}</p>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            <Link to={`/plant-details/${id}`}  className="btn bg-blue-700 text-white">View Details</Link> {/** amra akane id take dynamic vabe korsi  and uporer tilel take */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
