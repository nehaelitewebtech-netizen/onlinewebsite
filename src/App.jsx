import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./assets/Components/Header/Header";
import Home from "./assets/Pages/Home/Home";

const router=createBrowserRouter([
  {
    path:"/header",
    element:<Header/>
  },

  {
    path:"/home",
    elemnt:<Home/>
  },

  
  ])
  const App = () => {
  return <RouterProvider router={router} />;
}
export default App;

