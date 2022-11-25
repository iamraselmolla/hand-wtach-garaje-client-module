
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddAnItem from './Components/AddAnItem/AddAnItem';
import Dashborad from './Components/Layout/Dashborad';
import Main from './Components/Layout/Main';
import ErrorPage from './Components/Pages/404/ErrorPage';
import Blog from './Components/Pages/Blog/Blog';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import PrivateRoute from './Components/Routes/PrivateRoute';


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
          element: <AddAnItem></AddAnItem>
        }
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
