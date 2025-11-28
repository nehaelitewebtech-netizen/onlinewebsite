import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header/Header";
import Homee from "./Pages/Home/Home";

const router=createBrowserRouter([
  {
    path:"/header",
    element:<Header/>
  },

  {
    path:"/home",
    element:<Homee/>
  },

  
  ])
  const App = () => {
  return <RouterProvider router={router} />;
}
export default App;

