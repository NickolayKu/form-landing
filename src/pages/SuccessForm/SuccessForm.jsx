import { useMetaTags } from "react-metatags-hook";
import Footer from "../../components/Footer/Footer";
import SuccessFormTitle from "../../components/SuccessFormTitle/SuccessFormTitle";

export default function SuccessForm() {
  useMetaTags({
    title: `FORM - Заявка успешно отправлена`
  });

  return (
    <>
      <section>
        <SuccessFormTitle />
      </section>
      <Footer isFixed={true} />
    </>
  );
}