
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddAnItem from './Components/Pages/AddAnItem/AddAnItem';
import Dashborad from './Components/Layout/Dashborad';
import Main from './Components/Layout/Main';
import ErrorPage from './Components/Pages/404/ErrorPage';
import Blog from './Components/Pages/Blog/Blog';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import PrivateRoute from './Components/Routes/PrivateRoute';
import Allsellers from './Components/Pages/Allsellers/Allsellers';
import Allbuyers from './Components/Pages/Allbuyers/Allbuyers';
import Allitems from './Components/Pages/AllItems/Allitems';
import AllreportedItems from './Components/Pages/AllReportedItems/AllreportedItems';
import AllbookedItems from './Components/Pages/AllBookedItems/AllbookedItems';
import AllAddedItems from './Components/Pages/AllAddedItems/AllAddedItems';
import AllAdmin from './Components/Pages/AllAdmin/AllAdmin';
import Allusers from './Components/Pages/Allusers/Allusers';
import Profile from './Components/Pages/Profile/Profile';
import MyShopping from './Components/Pages/MyShopping/MyShopping';
import AllBlockedUsers from './Components/Pages/AllBlockedUser/AllBlockedUsers';
import Categories from './Components/Pages/Categories/Categories';
import PaymentItem from './Components/Pages/Pay/PaymentItem';
import Verification from './Components/Pages/Verification/Verification';
import UserDashBoard from './Components/Pages/Dashboard/UserDashboard';
import AdminRoute from './Components/Routes/AdminRoute';
import SellerRoute from './Components/Routes/SellerRoute';
import BuyerRoute from './Components/Routes/BuyerRoute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/all-items',
          element: <Allitems></Allitems>
        },
        {
          path: '/profile',
          element: <Profile></Profile>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/verification',
          element: <Verification></Verification>
        },
        {
          path: '/categories/:id',
          loader: ({params}) => {
            return fetch(`https://assignment-12-server-gray.vercel.app/categories/${params.id}`)
          },
          element: <Categories></Categories>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/pay/:id',
          element: <PaymentItem></PaymentItem>,
          loader: ({params}) => {
            return fetch(`https://assignment-12-server-gray.vercel.app/pay/${params.id}`)
          }
        },
        {
          path: '*',
          element: <ErrorPage></ErrorPage>
        }
      ]

    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashborad></Dashborad></PrivateRoute>,
      children: [
        {
          path: '/dashboard/activity',
          element: <AdminRoute><UserDashBoard></UserDashBoard></AdminRoute>
        },
        {
          path: '/dashboard/add-an-item',
          element:<AddAnItem></AddAnItem>
        },
        {
          path: '/dashboard/allsellers',
          element: <AdminRoute><Allsellers></Allsellers></AdminRoute>
        },
        {
          path: '/dashboard/allbuyers',
          element: <AdminRoute><Allbuyers></Allbuyers></AdminRoute>
        },
        {
          path: '/dashboard/all-admin',
          element: <AdminRoute><AllAdmin></AllAdmin></AdminRoute>
        },
        {
          path: '/dashboard/my-shopping/',
          element: <BuyerRoute><MyShopping></MyShopping></BuyerRoute>
        },
        {
          path: '/dashboard/all-blocked-users',
          element: <AdminRoute><AllBlockedUsers></AllBlockedUsers></AdminRoute>
        },
        {
          path: '/dashboard/all-users',
          element: <AdminRoute><Allusers></Allusers></AdminRoute>
        },
        {
          path: '/dashboard/reported-items',
          element: <AdminRoute><AllreportedItems></AllreportedItems></AdminRoute>
        },
        {
          path: '/dashboard/all-booked-items',
          element: <BuyerRoute><AllbookedItems></AllbookedItems></BuyerRoute>
        },
        {
          path: '/dashboard/all-added-items',
          element: <SellerRoute><AllAddedItems></AllAddedItems></SellerRoute>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
