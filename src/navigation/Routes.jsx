// Base layout
import BaseLayout from "../layouts/Base";

// Pages
import Home from "../pages/Home/Home";
import Contacts from "../pages/Contacts/Contacts";
import FeedbackForm from "../pages/FeedbackForm/FeedbackForm";
import PortfolioTopgun from "../pages/PortfolioTopgun/PortfolioTopgun";
import PortfolioColizeum from "../pages/PortfolioColizeum/PortfolioColizeum";
import SuccessForm from "../pages/SuccessForm/SuccessForm";
import PortfolioMagma from "../pages/PortfolioMagma/PortfolioMagma";
// import Error404 from "../pages/Error404/Error404";

const Routes = [
  {
    path: "/",
    element: <BaseLayout />,
    // errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/form",
        element: <FeedbackForm />,
      },
      {
        path: "/form/success",
        element: <SuccessForm />,
      },
      {
        path: "/projects/topgun",
        element: <PortfolioTopgun />,
      },
      {
        path: "/projects/colizeum",
        element: <PortfolioColizeum />,
      },
      {
        path: "/projects/magma",
        element: <PortfolioMagma />,
      },
    ],
  },
];

export default Routes;
