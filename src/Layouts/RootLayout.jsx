import React from "react";
import Navbar from "../assets/Components/Navbar";
import Footer from "../assets/Components/Footer";
import { Outlet, useNavigation } from "react-router";
import LoadingSpinner from "../assets/Components/LoadingSpinner";

const RootLayout = () => {
  // amra akane loading ar kaj kortesi
  const navigation = useNavigation();
  console.log(navigation.state);
  return (
    <div>
      {/* <Navbar/>
            <main className='min-h-[calc(100vh-285px)]'>

            <Outlet/>
            </main>
            <Footer/> */}

      {/* Amra akane loadin ta dekabo  */}
      <Navbar />

     {
        navigation.state === 'loading'?<LoadingSpinner/>: <main className='min-h-[calc(100vh-285px)]'>

            <Outlet/>
            </main>
     }

      <Footer />
    </div>
  );
};

export default RootLayout;
