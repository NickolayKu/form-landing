/* eslint-disable react/prop-types */
import ScrollAnimation from "react-animate-on-scroll";
import cls from "./PortfolioTitle.module.scss";

export default function PortfolioTitle(props) {
  const { title, text, tags } = props;

  return (
    <div className={cls.portfolioTitle}>
        <ScrollAnimation animateIn="fadeInUp" offset={1000} delay={0} duration={1} animateOnce={true}>
          <h1>{title}</h1>
        </ScrollAnimation>
        
      <div className={cls.tags}>
        {tags.map((tagItem, index) => {
          return <span key={index}>{tagItem}</span>
        })}
      </div>
      <h2>{text}</h2>
    </div>
  );
}
