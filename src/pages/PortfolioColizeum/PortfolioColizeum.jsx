import { useMetaTags } from "react-metatags-hook";
import PortfolioTitle from "../../components/PortfolioTitle/PortfolioTitle";
import OtherProjects from "../../components/OtherProjects/OtherProjects";
import Footer from "../../components/Footer/Footer";
import PortfolioColizeumContent from "../../components/PortfolioColizeumContent/PortfolioColizeumContent";

export default function PortfolioColizeum() {

  const projectData = {
    name: 'colizeum',
    title: 'colizeum - Cеть киберспортивных арен',
    text: 'Colizeum - крупнейшая сеть киберспортивных клубов в мире и самый известный бренд среди геймеров. Всего открыто более 430 клубов Colizeum в 19 странах.',
    tags: ['Разработка социальных сетей / увеличение трафика'],
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
      </section>
      <PortfolioColizeumContent />
      <section>
        <OtherProjects projectName={projectData.name} />
      </section>
      <Footer />
    </>
  );
}