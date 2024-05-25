import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";

export default function BaseLayout() {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState();

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }, [location]);

  return (
    <>
      <Header />
      <main className={isLoaded && "showing"}>
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
}
