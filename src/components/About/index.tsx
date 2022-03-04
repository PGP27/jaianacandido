import jaiana from '../../assets/jaiana.jpeg';
import adolescentes from '../../assets/adolescentes.png';
import adultos from '../../assets/adultos.png';
import idosos from '../../assets/idosos.png';
import dor from '../../assets/dor.png';

import Service from './components/Service';

const About = () => (
  <section>
    <div className="w-full flex flex-col justify-center items-center pt-20 pb-12 lg:flex-row">
      <div className="flex items-center lg:mr-20">
        <img
          src={jaiana}
          alt="Jaiana Cândido"
          className="w-72 rounded-full shadow-2xl"
        />
      </div>
      <div className="pt-20 px-8 flex flex-col justify-center sm:px-20 lg:w-1/2 lg:p-0">
        <h2 className="mb-8 text-2xl">Olá, é um prazer conhecer você!</h2>
        <p className="text-justify leading-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
    <div className="flex flex-col items-center pb-12">
      <h2 className="simple-services-title text-3xl text-center py-12 underline underline-offset-8">Público atendido</h2>
      <div className="w-full flex flex-col sm:grid sm:grid-cols-2 2xl:grid-cols-4 lg:w-4/5">
        <Service
          img={adolescentes}
          text="Adolescentes"
        />
        <Service
          img={adultos}
          text="Adultos"
        />
        <Service
          img={idosos}
          text="Idosos"
        />
        <Service
          img={dor}
          text="Pessoas com dor crônica"
        />
      </div>
    </div>
  </section>
);

export default About;
