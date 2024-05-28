import { useMetaTags } from "react-metatags-hook";
import cls from "./PortfolioTopgun.module.scss";
import PortfolioTitle from "../../components/PortfolioTitle/PortfolioTitle";
import PortfolioTopgunContent from "../../components/PortfolioTopgunContent/PortfolioTopgunContent";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function PortfolioTopgun() {
  const location = useLocation();
  const navigate = useNavigate();

  const projectName = location.pathname.replace(/^\/+/g, '');

  useMetaTags({
    title: `FORM - ${projectName.toUpperCase()}`
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
    {
      name: 'magma',
      title: 'MAGMA - архитектурное бюро',
      text: 'Magma Architecture – московское архитектурное бюро, ориентированное на изучение поэтического потенциала архитектуры и совершенство дизайна.',
      tags: ['Брендинг', 'UX/UI', 'Разработка'],
    },
  ];

  const projectIndex = projects.findIndex(project => project.name === projectName);

  const getNextProjectIndex = (currentIndex) => {
    let nextIndex = null;
    if(currentIndex + 1 >= projects.length){
      nextIndex = 0;
    } else {
      nextIndex = currentIndex + 1;
    }
    
    return nextIndex;
  }

  const nextProjectIndex = getNextProjectIndex(projectIndex);

  const [isMoreHeight, setIsMoreHeight] = useState(false);

  const handleGoToNextPage = () => {
    setIsMoreHeight(true);

    setTimeout(() => {
      window.scrollTo({ left: 0, top: document.body.scrollHeight + 500, behavior: "smooth" });
    }, 50)

    setTimeout(() => {
      const event = new CustomEvent('onBeforeNextProject');
      window.dispatchEvent(event);
    }, 425)

    setTimeout(() => {
      navigate(`/${projects[nextProjectIndex].name}`);
    }, 700)
  }
  
  return (
    <>
      <div className={cls.projectPageBlock}>
        <section>
          <PortfolioTitle title={projects[0].title} text={projects[0].text} tags={projects[0].tags}/>
        </section>
        <div className={cls.projectContentBlock}>
          <section>
            <PortfolioTopgunContent />
          </section>
          <section className="fullWidthSection">
            <img src="/images/topgun-3-min.jpg" className={cls.fullWidth} />
          </section>
        
          <section>
            <div className={cls.nextProjectButton} onClick={() => handleGoToNextPage()}>
              Следующий проект
            </div>
          </section>
          <section>
            <div className={[cls.nextPageBlock, isMoreHeight && cls.moreHeight].join(' ')} onClick={() => handleGoToNextPage()}>
              <PortfolioTitle title={projects[nextProjectIndex].title} text={projects[nextProjectIndex].text} tags={projects[nextProjectIndex].tags}/>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}