
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
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/register',
          element: <Register></Register>
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
          path: '/dashboard',
          // element: <Dashborad></Dashborad>
        },
        {
          path: '/dashboard/addanitem',
          element:<AddAnItem></AddAnItem>
        },
        {
          path: '/dashboard/allsellers',
          element: <Allsellers></Allsellers>
        },
        {
          path: '/dashboard/allbuyers',
          element: <Allbuyers></Allbuyers>
        },
        {
          path: '/dashboard/allitems',
          element: <Allitems></Allitems>
        },
        {
          path: '/dashboard/reported-items',
          element: <AllreportedItems></AllreportedItems>
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
