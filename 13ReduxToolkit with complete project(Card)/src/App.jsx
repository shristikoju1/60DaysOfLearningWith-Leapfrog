import 'bootstrap/dist/css/bootstrap-grid.min.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from "react-router-dom"
import Dashboard from "./Components/Dashboard"
import Cart from "./Components/Cart"
import RootLayout from "./Components/RootLayout"


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element = {<RootLayout/>}>
     <Route index element = {<Dashboard/>}></Route>
     <Route path="/cart" element = {<Cart/>}></Route>
    </Route>
   ))

  return (
    <>
      <div className="App">
        <RouterProvider router = {router}/>
      </div>
    </>
  )
}

export default App
