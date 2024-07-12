import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomNavbar from './Navbar'
import { Provider } from 'react-redux'
import store from './store/store'

const RootLayout = () => {
  return (
    <>
    <Provider store = {store}>
        <CustomNavbar/>


        <main>
            <Outlet/>
        </main>
    </Provider>
    </>
  )
}

export default RootLayout