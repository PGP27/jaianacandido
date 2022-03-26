import jaiana from '../../assets/jaiana.jpeg';

const Footer = () => (
  <div className="w-full flex justify-center bg-slate-700 text-white">
    <div className="w-full max-w-[1536px] flex flex-col items-center lg:flex-row justify-between p-4">
      <div className="flex items-center justify-center lg:justify-start mb-4">
        <img
          src={jaiana}
          alt="Jaiana Cândido"
          className="h-24 w-24 rounded-full shadow-md"
        />
        <div className="ml-4">
          <p className="text-2xl my-2">Jaiana Cândido</p>
          <p className="my-2">Psicóloga clínica</p>
        </div>
      </div>
      <a href="https://api.whatsapp.com/send?phone=5585996401691" rel="noreferrer" target="_blank">
        <button type="button" className="my-12 self-center lg:self-auto bg-emerald-700 text-white text-lg shadow-md rounded-full py-4 px-10 hover:opacity-75 transition">Agende sua sessão!</button>
      </a>
      <div className="flex">
        <a
          href="https://www.instagram.com/psi.jaianacandido"
          target="_blank"
          rel="noreferrer"
          className="opacity-75 hover:text-orange-400 transition"
        >
          INSTAGRAM
        </a>
        <a
          href="http://lattes.cnpq.br/1265173687714514"
          target="_blank"
          rel="noreferrer"
          className="ml-8 opacity-75 hover:text-blue-400 transition"
        >
          LATTES
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
