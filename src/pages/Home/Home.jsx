import { useMetaTags } from "react-metatags-hook";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import HomeProjects from "../../components/HomeProjects/HomeProjects";
import ServicesDirections from "../../components/ServicesDirections/ServicesDirections";
import ThinksSlider from "../../components/ThinksSlider/ThinksSlider";
import Footer from "../../components/Footer/Footer";
import ScrollAnimation from 'react-animate-on-scroll';
import HomeFeedback from "../../components/HomeFeedback/HomeFeedback";

export default function Home() {
  useMetaTags({
    title: `FORM - Главная`
  });

  return (
    <>
      <section>
        <HomeTitle />
      </section>
      <section>
        <HomeProjects />
      </section>
      <section>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <ServicesDirections />
        </ScrollAnimation>
      </section>
      <section>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <ThinksSlider />
        </ScrollAnimation>
      </section>
      <section>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <HomeFeedback />
        </ScrollAnimation>
      </section>
      <Footer />
    </>
  );
}
