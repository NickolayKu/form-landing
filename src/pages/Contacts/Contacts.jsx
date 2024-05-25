import { useMetaTags } from "react-metatags-hook";
import ContactsTitle from "../../components/ContactsTitle/ContactsTitle";

export default function Contacts() {
  useMetaTags({
    title: `FORM - Контакты`
  });

  return (
    <>
      <section>
        <ContactsTitle />
      </section>
    </>
  );
}