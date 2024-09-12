
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Services = () => {
  return (
    <section
      id="Services"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="" des="Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Criminal Law"
            des="Balancing scales of justice through defending accused and empoweing victims."
      icon={null}
          />
          <Card
            title="Civil law"
            des="Promoting social order and stability."
      icon={null}
          />
          <Card
            title="Ciber crime law"
            des="Shields your digital life, protects online rights, and ensure cyber_security."
      icon={null}
          />
          <Card
            title="Taxation law"
            des="Reducing economic inequality and maintaining Govt accountability."
      icon={null}
      
          />
          
          <Card
            title="Faimly law"
            des="Protect your legacy, secure the family's will-being and secure your future."
            icon={null}
          />
          <Card
            title="Election law"
            des="Ensuring every voice is heard, integrity in every Ballot."
      icon={null}
          />
          
        </div>
      </FadeIn>
    </section>
  );
};

export default Services;
