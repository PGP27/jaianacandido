import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import jaiana from '../../assets/jaiana.jpeg';
import InputForm from '../InputForm';
import SessionTitle from '../SessionTitle';

const About = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <SessionTitle title="Sobre mim" bgColor="bg-white" />
      <div className="my-10 w-full max-w-[1536px] flex items-center">
        <div className="flex-1">
          <div className="flex items-center mb-4">
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
          <p className="text-lg font-medium p-2">Olá, é um prazer conhecer você!</p>
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
          </div>
          <Link to="/sobre-mim" className="p-2 underline underline-offset-1 transition hover:text-blue-800">Ler mais</Link>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full pl-28">
            <Form
              onSubmit={() => {}}
              className="w-full flex flex-col p-6 rounded-lg shadow-md border border-slate-400 bg-slate-100"
            >
              <h2 className="mt-2 mb-8 text-center text-2xl font-medium">Mande sua mensagem!</h2>
              <InputForm type="text" name="name" placeholder="Nome" />
              <InputForm type="text" name="email" placeholder="Email" />
              <InputForm type="textarea" name="message" placeholder="Mensagem..." />
              <button type="submit" className="my-2 py-1 px-4 rounded-full text-lg text-white transition bg-blue-900 hover:opacity-80">Enviar</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;