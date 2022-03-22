import jaiana from '../../assets/jaiana.jpeg';
import SessionTitle from '../SessionTitle';

const About = () => (
  <div id="sobre" className="w-full flex flex-col items-center justify-center bg-gray-100">
    <SessionTitle title="Sobre mim" bgColor="bg-gray-100" lineColor='bg-[#111155]' />
    <div className="my-10 pb-10 px-4 sm:px-10 w-full max-w-[1536px] flex flex-col lg:flex-row items-center">
      <div className="flex-1">
        <div className="flex items-center justify-center lg:justify-start mb-4">
          <img
            src={jaiana}
            alt="Jaiana Cândido"
            className="h-32 w-32 rounded-full shadow-md"
          />
          <div className="ml-4">
            <p className="text-2xl my-2">Jaiana Cândido</p>
            <p className="my-2">Psicóloga clínica</p>
          </div>
        </div>
        <div className="text-justify p-2">
          <p className="my-3">
            Psicóloga pela Universidade de Fortaleza (UNIFOR). Mestranda em Psicologia pela Universidade de Fortaleza (UNIFOR).
            Membro integrante do Laboratório de Estudos e Práticas em Psicologia e Saúde (LEPP-Saúde),
            filiado ao Programa de Pós-Graduação em Psicologia da Universidade de Fortaleza.
          </p>
          <p className="my-3">
            Bolsista de Iniciação Científica FEQ (Fundação Edson Queiroz) - (Dezembro de 2019 a Dezembro de 2020).
            Bolsista de Pós-Graduação FUNCAP - Mestrado (Agosto de 2021 - presente).
          </p>
          <p className="my-3">
            <strong>Temáticas de estudo e atuação:</strong> Suicídio, Saúde Mental, Plantão Psicológico, Psicoterapia Breve-Focal,
            Gestalt-Terapia, Psicologia da Dor, Psicologia da Saúde e Gerontologia.
          </p>
        </div>
      </div>
      <div className="mt-16 w-full flex-1 flex justify-center items-center">
        <div className="w-full lg:pl-28">
          <form
            action="https://formsubmit.co/psi.jaianacandido@gmail.com"
            method="POST"
            className="w-full flex flex-col p-6 rounded-lg shadow-lg bg-orange-200"
          >
            <h2 className="mt-2 mb-8 text-center text-2xl">Mande sua mensagem!</h2>
            <input
              name="nome"
              type="text"
              required
              autoComplete="off"
              placeholder="Nome"
              className="my-2 ring-1 ring-slate-400 p-2 rounded-md outline-none focus:ring-sky-500"
            />
            <input
              name="email"
              type="email"
              required
              autoComplete="off"
              placeholder="Email"
              className="my-2 ring-1 ring-slate-400 p-2 rounded-md outline-none focus:ring-sky-500"
            />
            <textarea
              name="mensagem"
              required
              placeholder="Mensagem..."
              rows={5}
              maxLength={500}
              className="resize-none my-2 ring-1 ring-slate-400 p-2 rounded-md outline-none focus:ring-sky-500"
            />
            <button type="submit" className="my-2 py-2 px-4 rounded-full text-lg text-white transition bg-[#111155] hover:bg-[#333377]">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default About;
