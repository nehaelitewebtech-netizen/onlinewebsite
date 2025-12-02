import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header/Header";
import Homee from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Footerpage from "./Pages/Footerpage/Footerpage";

const router=createBrowserRouter([
  {
    path:"/header",
    element:<Header/>
  },

  {
    path:"/home",
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

  
  ])
  const App = () => {
  return <RouterProvider router={router} />;
}
export default App;

