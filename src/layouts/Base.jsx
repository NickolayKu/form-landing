import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import { useEffect, useState } from "react";

export default function BaseLayout() {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);

    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div style={{transition: "all ease 0.6s", opacity: isLoaded ? 1 : 0}}>
      <Header />
      <main className={isLoaded ? "showing" : ""}>
        <Outlet />
      </main>
    </div>
  );
}
