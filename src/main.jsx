import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {Contact, Donation, Education, Login,Landingpage, Signup} from "./Pages/index.js"
import Fundraisers from './Components/Fundraiser.jsx'




const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Landingpage/>,
      },
      {
        path:'/donation',
        element:<Donation/>
      },
      {
        path:'/education',
        element:<Education/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<Signup/>
      },
      {
        path:'/fundraisers',
        Component:Fundraisers,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
