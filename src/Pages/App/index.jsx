//import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import { Home } from '../Home';
import { MyAccount } from '../MyAccount';
import { MyOrder } from '../MyOrder';
import { MyOrders } from '../MyOrders';
import { NotFound } from '../NotFound';
import { SignIn } from '../SignIn';
import { Navbar } from '../../Components/Navbar';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu';
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/clothes', element: <Home/> },
    { path: '/electronics', element: <Home/> },
    { path: '/furnitures', element: <Home/> },
    { path: '/my-account', element: <MyAccount />},
    { path: '/my-order', element: <MyOrder/>},
    { path: '/my-orders', element: <MyOrders/>},
    { path: '/my-orders/last', element: <MyOrder/>},
    { path: '/my-orders/:id', element: <MyOrder/>},
    { path: '/*', element: <NotFound/>},
    { path: '/others', element: <Home/> },
    { path: '/sign-in', element: <SignIn/>},
    { path: '/toys', element: <Home/> }
  ]);

  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export { App };