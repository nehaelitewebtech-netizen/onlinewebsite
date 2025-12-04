import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header/Header";
import Homee from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Footerpage from "./Pages/Footerpage/Footerpage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import SkillPage from "./Pages/SkillPage/SkillPage";

const router=createBrowserRouter([
  {
    path:"/header",
    element:<Header/>
  },

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

  
  ])
  const App = () => {
  return <RouterProvider router={router} />;
}
export default App;

