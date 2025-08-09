import ContactSection from "./component/home";
import MapFrame from "./component/map";

export default function ContactUs() {

  return (
    <section className="flex flex-col items-center w-full bg-white relative top-0">
      <ContactSection />
      <MapFrame />
    </section>
  );
}