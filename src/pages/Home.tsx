import jaiana from '../assets/jaiana.jpeg';
import Audience from '../components/Audience';
import About from '../components/About';
import Locations from '../components/Locations';

const Home = () => (
  <div>
    <div className="w-full flex justify-center bg-gradient-to-br from-slate-50 to-sky-50">
      <div className="w-full lg:w-[1536px] px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col items-start justify-between pt-20 lg:pb-8">
          <div className="font-medium">
            <p className="text-4xl sm:text-5xl">Olá! <span className="text-red-400">Sou Jaiana Cândido.</span></p>
            <p className="mt-4 text-3xl sm:text-5xl">Psicóloga clínica.</p>
            <p className="mt-12">Gestalt-terapia & dor.</p>
          </div>
          <button type="button" className="my-12 self-center lg:self-auto bg-emerald-700 text-white text-lg font-medium shadow-md rounded-full py-4 px-10 hover:opacity-75 transition">Agende sua sessão!</button>
          <a
            href="https://www.instagram.com/psi.jaianacandido/"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:flex opacity-75 hover:text-purple-800 transition"
          >
            INSTAGRAM
          </a>
        </div>
        <div className="h-full mb-20 lg:mb-0 flex-1 flex flex-col items-center justify-center">
          <img src={jaiana} alt="Jaiana Cândido" className="relative z-10 shadow-md w-[400px] rounded-full" />
          <div className="hidden absolute z-20 h-[400px] xl:w-[600px] xl:flex flex-col justify-between">
            <div className="h-16 w-16 rounded-full bg-purple-300 self-end" />
            <div className="flex justify-between">
              <div className="h-10 w-10 rounded-full bg-sky-300" />
              <div className="h-24 w-24 rounded-full bg-orange-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <Audience /> */}
    <Locations />
    <About />
  </div>
);

export default Home;
