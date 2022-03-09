import jaiana from '../assets/jaiana.jpeg';

const Home = () => (
  <div>
    <div className="w-full flex justify-center bg-slate-100">
      <div className="w-full lg:w-[1536px] py-12 px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col items-start justify-between">
          <div className="font-medium">
            <p className="text-4xl sm:text-5xl">Olá! <span className="text-red-400">Sou Jaiana Cândido.</span></p>
            <p className="mt-4 text-3xl sm:text-5xl">Psicóloga clínica.</p>
            <p className="mt-12">Gestalt-terapia & dor.</p>
          </div>
          <button type="button" className="my-16 self-center lg:self-auto bg-emerald-700 text-white text-lg font-medium shadow-md rounded-full py-4 px-10 hover:opacity-75 transition">Agende sua sessão!</button>
          <a
            href="https://www.instagram.com/psi.jaianacandido/"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:flex opacity-75 hover:text-red-400 transition"
          >
            INSTAGRAM
          </a>
        </div>
        <div className="w-full flex-1 flex justify-center">
          <img src={jaiana} alt="Jaiana Cândido" className="shadow-md w-[400px] rounded-full" />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
