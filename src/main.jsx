import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Context from './provider/Context';
import Root from './layout/Root';
import Register from './pages/Register';
import Login from './pages/Login';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Service from './pages/Service/Service';
import PrivateRoute from './Routes/PrivateRoute';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home> ,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/service',
        element:<PrivateRoute><Service></Service></PrivateRoute>
      }
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}><Context><RouterProvider router={router} /></Context></QueryClientProvider>
  </StrictMode>,
)
