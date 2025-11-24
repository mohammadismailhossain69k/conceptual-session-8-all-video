
import Navbar from "../assets/Components/Navbar";
import Footer from "../assets/Components/Footer";
import PlantCard from "../assets/Components/PlantCard";
import { useLoaderData } from "react-router";

const Home = () => {
  const {plants} = useLoaderData()// amra akta destucturing korsi api teke plants take nisi
  console.log (plants)
  return (
    <div>
      <main className="min-h-[calc(100vh-285px)]">
        <p>Welcome Home</p>
        <p>Plant Card</p>
        <div className="grid grid-cols-3  gap-5 py-8">
        {
          plants.map(plant=> <PlantCard key={plant.id} plant={plant}></PlantCard>)
        }
        
        </div>
      </main>
    </div>
  );
};

export default Home;
