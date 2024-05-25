// Base layout
import BaseLayout from "../layouts/Base";

// Pages
import Home from "../pages/Home/Home";
import Contacts from "../pages/Contacts/Contacts";
import Portfolio from "../pages/Portfolio/Portfolio";
// import PortfolioColizeum from "../pages/PortfolioColizeum/PortfolioColizeum";
// import PortfolioMagma from "../pages/PortfolioMagma/PortfolioMagma";
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
        path: "/portfolio/:projectName",
        element: <Portfolio />,
      },
      // {
      //   path: "/colizeum",
      //   element: <PortfolioColizeum />,
      // },
      // {
      //   path: "/magma",
      //   element: <PortfolioMagma />,
      // },
    ],
  },
];

export default Routes;
