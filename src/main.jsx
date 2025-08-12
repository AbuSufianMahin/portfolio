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
import HomePage from './Components/Pages/HomeLayoutPages/Home/HomePage';
import ProjectDetails from './Components/Pages/HomeLayoutPages/Home/Projects/ProjectDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: "/project-details/:projectName",
        Component: ProjectDetails
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
