import { useLoaderData } from "react-router";

const PlantDetails = () => {
    const {data} = useLoaderData()
     const {name, description, category, price,image} = data.plants;//plant take amra Destructuring korbo


  return (
    <div className="">
      <div className="card max-w-5xl mx-auto bg-base-100  shadow-sm object-cover">
        <figure className="h-[260px] overflow-hidden">
          <img className="w-full h-full object-cover"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Category: {description}</p>
          <p>Category: {category}</p>
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-blue-700 text-white">Add to Cart</button> {/** amra akane id take dynamic vabe korsi  and uporer tilel take */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
