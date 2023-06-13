import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Root from "./routes/Root";
import Home from "./routes/Home";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} /> 
      {/* create router and pass the router to router provider */}
    </div>
  );
}

export default App;