import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LenisScroll from './utils/lenis';

// App routes
import Routes from './navigation/Routes';

// App fonts
import './assets/fonts/ScaniaSansCY-Bold.ttf';
import './assets/fonts/ScaniaSansCY-Italic.ttf';
import './assets/fonts/ScaniaSansCY-Regular.ttf';
import './assets/fonts/ScaniaSansCYHeadline-Bold.ttf';
import './assets/fonts/ScaniaSansCYHeadline-Regular.ttf';

// Base styles
import './styles/reset.scss';
import './styles/variables.scss';
import './styles/globals.scss';

const router = createBrowserRouter(Routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LenisScroll />
    <RouterProvider router={router} />
  </React.StrictMode>,
)