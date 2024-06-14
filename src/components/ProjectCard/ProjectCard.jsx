/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import cls from "./ProjectCard.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

export default function ProjectCard(props) {
  const { title, image, tags, link, soon } = props;

  return (
    <div className={cls.projectCard}>
      <Link to={link} className={soon === true && cls.disabled}>
        <div className={cls.image} style={{backgroundImage: `url(/images/${image})`}}></div>
        <ScrollAnimation animateIn="fadeInUp" offset={1550} initiallyVisible={true} delay={0} duration={0.5} animateOnce={true}>
          <div className={cls.cardTitle}>
            <div className={cls.title}>{title}</div>
            {soon && <span className={cls.soonSpan}>soon</span>}
          </div>
        </ScrollAnimation>
        <div className={cls.tags}>
          {tags.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </div>
      </Link>
    </div>
  );
}