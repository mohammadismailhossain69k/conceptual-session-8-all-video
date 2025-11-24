import React, { useEffect, useState } from "react";

const PlantDetails = () => {
    const [plant, setPlant] = useState({})
    
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/plant/2')// amra id akane dynamic use korbo 
        .then(res=> res.json())
        .then(data=> console.log (data))
    },[])
  return (
    <div className="card bg-base-100 max-w-5xl mx-auto  shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
