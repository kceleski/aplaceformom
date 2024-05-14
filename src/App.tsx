import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import ListingByService from "./pages/ListingByService";
import ViewListing from "./pages/ViewListing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/listing/:type",
    element: <ListingByService />,
  },
  {
    path: "/listing/:type/:city/:state",
    element: <Listing />,
  },
  {
    path: "/view/:type/:id",
    element: <ViewListing />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
