import { useMetaTags } from "react-metatags-hook";
import PortfolioTitle from "../../components/PortfolioTitle/PortfolioTitle";
import OtherProjects from "../../components/OtherProjects/OtherProjects";
import Footer from "../../components/Footer/Footer";
import PortfolioMagmaContent from "../../components/PortfolioMagmaContent/PortfolioMagmaContent";

export default function PortfolioMagma() {
  const projectData = {
    name: 'magma',
    title: 'MAGMA - архитектурное бюро',
    text: 'Magma Architecture – московское архитектурное бюро, ориентированное на изучение поэтического потенциала архитектуры и совершенство дизайна.',
    tags: ['Брендинг', 'UX/UI', 'Разработка'],
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
        <PortfolioMagmaContent />
        <OtherProjects projectName={projectData.name} />
      </section>
      <Footer />
    </>
  );
}