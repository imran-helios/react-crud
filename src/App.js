import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Crud from './components/Crud/Crud/Crud';
import Details from './components/Crud/Details/Details';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Crud />
    },
    {
      path: '/details/:id',
      element: <Details />
    }
  
])
  return (
    <div>
      <RouterProvider router = {router} />
      {/* <Crud /> */}
    </div>
  );
}

export default App;
