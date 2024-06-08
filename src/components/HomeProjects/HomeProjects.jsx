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
      title: 'colizeum - сеть киберарен',
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

  const projectsCardsSoon = [
    {
      image: '9d6823e1aff3a6a2fb1044c2dea3619a.jpg',
      title: 'wave - бьюти пространство',
      tags: ['Брендинг'],
      link: '/',
    },
    {
      image: '7c847f13968067dcbbd01659430ee286.jpg',
      title: 'main - архитектурное бюро',
      tags: ['Брендинг', 'UX/UI', 'Разработка'],
      link: '/',
    },
    {
      image: '949ddfe17ffac1a6b5157258ed007e69.jpg',
      title: 'первый лекарь - сеть аптек',
      tags: ['Брендинг'],
      link: '/',
    },
  ]

  return (
      <div className="container">
        <div className={cls.homeProjects}>
          {projectsCards.map((item, index) => {
            return <ProjectCard key={index} image={item.image} title={item.title} tags={item.tags} soon={false} link={'/projects' + item.link}/>
          })}
        </div>
        <div className={cls.homeProjects}>
          {projectsCardsSoon.map((item, index) => {
            return <ProjectCard key={index} image={item.image} title={item.title} tags={item.tags} soon={true} link={''}/>
          })}
        </div>
      </div>
  )
}