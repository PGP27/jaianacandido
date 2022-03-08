import jaiana from '../../assets/jaiana.jpeg';
import adolescentes from '../../assets/adolescentes.png';
import adultos from '../../assets/adultos.png';
import idosos from '../../assets/idosos.png';
import dor from '../../assets/dor.png';

import Service from './components/Service';

const About = () => (
  <section>
    <div className="w-full flex flex-col items-center justify-center pt-20 lg:flex-row">
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
          Psicóloga pela Universidade de Fortaleza (UNIFOR). Mestranda em Psicologia pela Universidade de Fortaleza (UNIFOR).
          Membro integrante do Laboratório de Estudos e Práticas em Psicologia e Saúde (LEPP-Saúde),
          filiado ao Programa de Pós-Graduação em Psicologia da Universidade de Fortaleza.
          Bolsista de Iniciação Científica FEQ (Fundação Edson Queiroz) - (Dezembro de 2019 a Dezembro de 2020).
          Bolsista de Pós-Graduação FUNCAP - Mestrado (Agosto de 2021 - presente).
          Temáticas de estudo e atuação: Suicídio, Saúde Mental, Plantão Psicológico, Psicoterapia Breve-Focal,
          Gestalt-Terapia, Psicologia da Dor, Psicologia da Saúde e Gerontologia.
        </p>
      </div>
    </div>
    <div className="flex flex-col items-center pb-12">
      <h2 className="text-2xl py-12 underline underline-offset-4">Público atendido</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
