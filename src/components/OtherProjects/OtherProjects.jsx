/* eslint-disable react/prop-types */
import cls from "./OtherProjects.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import ScrollAnimation from "react-animate-on-scroll";

export default function OtherProjects(props) {
  const { projectName = null } = props;

  const projectsCards = [
    {
      name: 'topgun',
      image: 'project-topgun.png',
      title: 'topgun - сеть барбершопов',
      tags: ['UX/UI', 'Разработка'],
      link: '/topgun',
    },
    {
      name: 'colizeum',
      image: 'project-colizeum.png',
      title: 'colizeum - сеть киберарен',
      tags: ['SMM', 'Увеличение трафика'],
      link: '/colizeum',
    },
    {
      name: 'magma',
      image: 'project-magma.png',
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