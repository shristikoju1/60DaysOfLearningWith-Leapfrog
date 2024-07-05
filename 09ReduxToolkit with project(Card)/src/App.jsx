import Product from "./Components/Product"
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from "react-router-dom"


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
   <Route>
    <Route>
      
    </Route>
   </Route>
  ))
  return (
    <>
    <Product/>
    </>
  )
}

export default App
