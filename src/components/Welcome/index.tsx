import './Welcome.css';

const Welcome = () => (
  <section className="welcome-container h-screen w-full py-8 px-2 text-white text-center flex justify-center">
    <div className="w-full lg:w-3/5 flex justify-center">
      <div className="flex flex-col items-center justify-center">    
        <p className="my-12 flex flex-col text-lg">
          <strong className="text-4xl">
            Jaiana Cristina Cândido Morais
          </strong>
          Psicóloga - CRP 11/16744
        </p>
        <p className="my-12 text-4xl">
          Gestalt-terapia e dor
        </p>
        <p className="my-12 text-4xl">
          Agende sua sessão!
        </p>
        <a
          className="my-12 py-1 px-4 rounded-md text-xl text-center text-white border border-gray-400 bg-green-800 hover:bg-green-700"
          href="https://api.whatsapp.com/send?phone=5585996401691"
          target="_blank"
          rel="noopener noreferrer"
        >
          AGENDAR
        </a>
      </div>
    </div>
  </section>
);

export default Welcome;
