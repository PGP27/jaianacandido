import jaiana from '../../assets/jaiana.jpeg';

const Welcome = () => (
  <div className="w-full py-10 flex justify-center bg-gradient-to-br from-slate-50 to-sky-50">
    <div className="w-full lg:w-[1536px] px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
      <div className="flex-1 flex flex-col items-start justify-between pt-20 lg:pb-8">
        <div>
          <p className="text-4xl sm:text-5xl">Olá, tudo bem?</p>
          <p className="text-3xl sm:text-5xl text-red-400 mt-2">Seja bem-vindo(a)!</p>
          <p className="mt-12">Gestalt-terapia & dor.</p>
        </div>
        <a href="https://api.whatsapp.com/send?phone=5585996401691" rel="noreferrer" target="_blank">
          <button type="button" className="my-12 self-center lg:self-auto bg-emerald-700 text-white text-lg shadow-md rounded-full py-4 px-10 hover:opacity-75 transition">Agende sua sessão!</button>
        </a>
        <div className="flex">
          <a
            href="https://www.instagram.com/psi.jaianacandido"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:flex opacity-75 hover:text-orange-700 transition"
          >
            INSTAGRAM
          </a>
          <a
            href="http://lattes.cnpq.br/1265173687714514"
            target="_blank"
            rel="noreferrer"
            className="hidden ml-8 lg:flex opacity-75 hover:text-blue-800 transition"
          >
            LATTES
          </a>
        </div>
      </div>
      <div className="flex-1 h-full mb-20 lg:mb-0 flex-1 flex flex-col items-center justify-center">
        <img src={jaiana} alt="Jaiana Cândido" className="relative z-10 shadow-md w-[400px] rounded-full" />
        <div className="hidden absolute z-20 h-[400px] xl:w-[600px] xl:flex flex-col justify-between">
          <div className="h-16 w-16 rounded-full bg-fuchsia-300 self-end" />
          <div className="flex justify-between">
            <div className="h-10 w-10 rounded-full bg-emerald-300" />
            <div className="h-24 w-24 rounded-full bg-orange-300" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Welcome;
