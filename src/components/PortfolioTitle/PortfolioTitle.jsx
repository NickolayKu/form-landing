/* eslint-disable react/prop-types */
import cls from "./PortfolioTitle.module.scss";
import { useEffect, useState } from "react";

export default function PortfolioTitle(props) {
  const { title, text, tags } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={cls.portfolioTitle}>
          <h1 className={isLoaded ? cls.loaded : ""}>{title}</h1>
        
      <div className={cls.tags}>
        {tags.map((tagItem, index) => {
          return <span key={index}>{tagItem}</span>
        })}
      </div>
      <h2>{text}</h2>
    </div>
  );
}
