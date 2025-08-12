import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import "./index.css"



import HomeLayout from './Components/Layouts/HomeLayout';

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
