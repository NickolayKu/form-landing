import { useMetaTags } from "react-metatags-hook";
import Footer from "../../components/Footer/Footer";
import FeedbackFormTitle from "../../components/FeedbackFormTitle/FeedbackFormTitle";

export default function FeedbackForm() {
  useMetaTags({
    title: `FORM - Начать проект`
  });

  return (
    <>
      <section>
        <FeedbackFormTitle />
      </section>
      <Footer isFixed={true} />
    </>
  );
}
