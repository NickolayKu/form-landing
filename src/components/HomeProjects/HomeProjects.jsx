import cls from "./HomeProjects.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function HomeProjects() {

  const projectsCards = [
    {
      image: 'project-topgun.png',
      title: 'topgun - сеть барбершопов',
      tags: ['UX/UI', 'Разработка'],
      link: '/topgun',
      soon: false,
    },
    {
      image: 'project-colizeum.png',
      title: 'colizeum - сеть киберарен',
      tags: ['SMM', 'Увеличение трафика'],
      link: '/colizeum',
      soon: false,
    },
    {
      image: 'project-magma.png',
      title: 'magma - архитектурное бюро',
      tags: ['Брендинг', 'UX/UI', 'Разработка'],
      link: '/magma',
      soon: false,
    },
    {
      image: 'project-wawe.png',
      title: 'wave - бьюти пространство',
      tags: ['Брендинг'],
      link: '/',
      soon: true,
    },
    {
      image: 'project-main.png',
      title: 'main - архитектурное бюро',
      tags: ['Брендинг', 'UX/UI', 'Разработка'],
      link: '/',
      soon: true,
    },
    {
      image: 'project-lek.png',
      title: 'первый лекарь - сеть аптек',
      tags: ['Брендинг'],
      link: '/',
      soon: true,
    },
  ]

  return (
      <div className="container">
        <div className={cls.homeProjects}>
          {projectsCards.map((item, index) => {
            return <ProjectCard key={index} image={item.image} title={item.title} tags={item.tags} soon={item.soon} link={'/projects' + item.link}/>
          })}
        </div>
      </div>
  )
}