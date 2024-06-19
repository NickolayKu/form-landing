import { Outlet, useLocation, ScrollRestoration } from "react-router-dom";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";

export default function BaseLayout() {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  useEffect(() => {
    setIsLoaded(false);

    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);


    setTimeout(() => {
      window.scrollTo(0, -150);
    }, 350);

    setTimeout(() => {
      window.scrollTo(0, -150);
    }, 400);
    
    setTimeout(() => {
      window.scrollTo(0, -150);
    }, 500);

    return () => setIsLoaded(false);
  }, [location]);

  useEffect(() => { 
    setTimeout(() => {
      window.scrollTo(0, -150);
    }, 350);
  }, []);

  return (
    <div style={{transition: "all ease 0.6s", opacity: isLoaded ? 1 : 0}}>
      <Header />
      <main className={isLoaded ? "showing" : ""}>
        <Outlet />
      </main>
      <ScrollRestoration preventScrollReset={false}/>
    </div>
  );
}
