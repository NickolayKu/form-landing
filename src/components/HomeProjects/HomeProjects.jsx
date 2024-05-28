import cls from "./HomeProjects.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function HomeProjects() {

  const projectsCards = [
    {
      image: 'c7a96012faf046e0238087b69a89a0c5-min.jpg',
      title: 'topgun - сеть барбершопов',
      tags: ['UX/UI', 'Разработка'],
      link: '/topgun',
    },
    {
      image: 'fb89c4046b6ae08e3df0fa1a71d9ef11-min.jpg',
      title: 'colizeum - киберcпортивные арены',
      tags: ['SMM', 'Увеличение трафика'],
      link: '/colizeum',
    },
    {
      image: '6bcdac3d5991ba7fd927cf4b7e235f9a-min.jpg',
      title: 'magma - архитектурное бюро',
      tags: ['Брендинг', 'UX/UI', 'Разработка'],
      link: '/magma',
    },
  ]

  return (
      <div className="container">
        <div className={cls.homeProjects}>
          {projectsCards.map((item, index) => {
            return <ProjectCard key={index} image={item.image} title={item.title} tags={item.tags} link={'/projects' + item.link}/>
          })}
        </div>
      </div>
  )

}