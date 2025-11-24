import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import Home from './Pages/Home.jsx'
import RootLayout from './Layouts/RootLayout.jsx'
import PlantDetails from './Pages/PlantDetails.jsx'

const router = createBrowserRouter([
{
  path: '/',
  Component: RootLayout,
  children:[
  {
  index: true,// ata true korle bydefult RootLayout panet ar Home sathe takbe
  element: <Home/>,
  loader: ()=> fetch('https://openapi.programming-hero.com/api/plants'),
},
{

  path: 'home',// manush chile home sarch dile o pai ata korse 
  element: <Home/>
},
{
  path: '/contact',
  Component:Contact,
},
{
  path:'/about',
  Component:About,
},

{
  path:'/plant-details/:id', //uporer title amra akane : diye dynamic vabe id take bosabo 
  Component: PlantDetails,
}
  ]
},



])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
