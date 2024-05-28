/* eslint-disable react/prop-types */
import cls from "./OtherProjects.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import ScrollAnimation from "react-animate-on-scroll";

export default function OtherProjects(props) {
  const { projectName = null } = props;

  const projectsCards = [
    {
      name: 'topgun',
      image: 'c7a96012faf046e0238087b69a89a0c5-min.jpg',
      title: 'topgun - сеть барбершопов',
      tags: ['UX/UI', 'Разработка'],
      link: '/topgun',
    },
    {
      name: 'colizeum',
      image: 'fb89c4046b6ae08e3df0fa1a71d9ef11-min.jpg',
      title: 'colizeum - киберcпортивные арены',
      tags: ['SMM', 'Увеличение трафика'],
      link: '/colizeum',
    },
    {
      name: 'magma',
      image: '6bcdac3d5991ba7fd927cf4b7e235f9a-min.jpg',
      title: 'magma - архитектурное бюро',
      tags: ['Брендинг', 'UX/UI', 'Разработка'],
      link: '/magma',
    },
  ]

  return (
      <div className="container">
        <ScrollAnimation animateIn="fadeInUp" duration={0.6} animateOnce={true}>
          <h1 className={cls.h1}>
            Другие проекты
            <div className={cls.line}></div>
          </h1>
        </ScrollAnimation>

        <div className={cls.otherProjects}>
          {projectsCards.map((item, index) => {
            if(item.name !== projectName){
              return <ProjectCard key={index} image={item.image} title={item.title} tags={item.tags} link={'/projects' + item.link}/>
            }
          })}
        </div>
      </div>
  )
}