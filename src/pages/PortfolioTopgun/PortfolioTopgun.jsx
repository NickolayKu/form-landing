import { useMetaTags } from "react-metatags-hook";
import PortfolioTitle from "../../components/PortfolioTitle/PortfolioTitle";
import PortfolioTopgunContent from "../../components/PortfolioTopgunContent/PortfolioTopgunContent";
import OtherProjects from "../../components/OtherProjects/OtherProjects";
import Footer from "../../components/Footer/Footer";

export default function PortfolioTopgun() {
  const projectData = {
    name: 'topgun',
    title: 'topgun - международная сеть барбершопов',
    text: 'TOPGUN — международная сеть барбершопов, насчитывающая более 300 активных филиалов с общим оборотом 3,1 млрд р. Перед нами стояла задача разработать редизайн текущего визуала сайта, сохранив узнаваемость и характер бренда.',
    tags: ['UX/UI'],
  };

  useMetaTags({
    title: `FORM - ${projectData.name.toUpperCase()}`
  });
  
  return (
    <>
      <section>
        <PortfolioTitle
          title={projectData.title}
          text={projectData.text}
          tags={projectData.tags}
        />
        <PortfolioTopgunContent />
      </section>
      <section>
        <OtherProjects projectName={projectData.name} />
      </section>
      <Footer />
    </>
  );
}