/* eslint-disable react/prop-types */
import cls from "./PortfolioTitle.module.scss";

export default function PortfolioTitle(props) {
  const { title, text, tags } = props;

  return (
    <div className={cls.portfolioTitle}>
      <h1>{title}</h1>
      <div className={cls.tags}>
        {tags.map((tagItem, index) => {
          return <span key={index}>{tagItem}</span>
        })}
      </div>
      <h2>{text}</h2>
    </div>
  );
}
