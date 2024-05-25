import { useMetaTags } from "react-metatags-hook";
import cls from "./Portfolio.module.scss";
import PortfolioTitle from "../../components/PortfolioTitle/PortfolioTitle";
import PortfolioTopgunContent from "../../components/PortfolioTopgunContent/PortfolioTopgunContent";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function Portfolio() {
  let { projectName } = useParams();

  const [pageTitleName, setPageTitleName] = useState(projectName.toUpperCase());

  useMetaTags({
    title: `FORM - ${pageTitleName}`
  });

  const projects = [
    {
      name: 'topgun',
      title: 'topgun - международная сеть барбершопов',
      text: 'TOPGUN — международная сеть барбершопов, насчитывающая более 300 активных филиалов с общим оборотом 3,1 млрд р. Перед нами стояла задача разработать редизайн текущего визуала сайта, сохранив узнаваемость и характер бренда.',
      tags: ['UX/UI', 'Разработка'],
    },
    {
      name: 'colizeum',
      title: 'colizeum - Cеть киберспортивных арен',
      text: 'Colizeum - крупнейшая сеть киберспортивных клубов в мире и самый известный бренд среди геймеров. Всего открыто более 430 клубов Colizeum в 19 странах.',
      tags: ['Разработка социальных сетей / увеличение трафика'],
    },
  ];

  const firstProject = projects.find(project => project.name === projectName);

  if(!firstProject || firstProject === -1) {
    throw new Response("", { status: 404 });
  }

  const [loadedProjects, setLoadedProjects] = useState([firstProject]);

  const handleLoadNewProject = () => {
    const newSet = new Set(loadedProjects.map(e => JSON.stringify(e)));
    const notLoaded = projects.filter(e => !newSet.has(JSON.stringify(e)));
    console.log(notLoaded)
    const randomIndex = Math.floor(Math.random() * (notLoaded.length - 1));
    const newProjectToLoad = notLoaded[randomIndex];

    console.log(newProjectToLoad);
    setLoadedProjects([...loadedProjects, newProjectToLoad])
    //console.log(notLoaded, newProjectToLoad);
    console.log(loadedProjects);


  }

  useEffect(() => {
    handleLoadNewProject();
  }, []);

  return (
    <>
      <section>
        <PortfolioTitle title={firstProject.title} text={firstProject.text} tags={firstProject.tags}/>
      </section>
      <section>
        <PortfolioTopgunContent />
      </section>
        <img src="/images/topgun-3-min.jpg" className={cls.fullWidth} />
    </>
  );
}