import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './conponents/Main.jsx';
import Phones from './conponents/Phones.jsx';
import Phone from './conponents/Phone.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/phones',
        element:<Phones></Phones>,
        loader:()=> fetch('http://localhost:5000/phones')
      },
      {
        path:'/phone/:id',
        element: <Phone></Phone>,
        loader: ({params})=> fetch(`http://localhost:5000/phones/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
