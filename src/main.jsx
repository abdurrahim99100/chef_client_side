import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Home from './components/Home/Home';
import Error from './components/Shard/Error';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Review from './components/Home/Review/Review';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './privateroute/PrivateRoute';
import Blog from './components/blog/Blog';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/viewRecipe/:id",
        element: <PrivateRoute><Review></Review></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chef-server-side-cornollc.vercel.app/chef/${params.id}`)
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)


