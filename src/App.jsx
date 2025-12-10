import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header/Header";
import Homee from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Footerpage from "./Pages/Footerpage/Footerpage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import SkillPage from "./Pages/SkillPage/SkillPage";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import CertificationPage from "./Pages/CertificationPage/CertificationPage";

const router=createBrowserRouter([

  {
    path:"/",
    element:<Homee/>
  },

  {
    path:"/contact",
    element:<ContactUs/>
  },

  {
    path:"/Footer",
    element:<Footerpage/>
  },


  {
    path:"/About",
    element:<AboutUs/>
  },

  {
    path:"/skills",
    element:<SkillPage/>
  },

  {
    path:"/Projects",
    element:<ProjectPage/>
  },

  {
    path:"/certifications",
    element:<CertificationPage/>
  },

  
  
  ])
  const App = () => {
  return <RouterProvider router={router} />;
}
export default App;

