import fratelli from '../../assets/fratelli.png';
import ioci from '../../assets/ioci.png';
import online from '../../assets/online.png';

import LocationCard from './components/LocationCard';

const Locations = () => (
  <section className="flex flex-col items-center">
    <h2 className="text-2xl text-center pt-12 pb-8 underline underline-offset-4">Locais de atendimento</h2>
    <div className="w-full flex flex-col items-center justify-center lg:flex-row">
      <LocationCard
        img={fratelli}
        title="Clínica de Psicologia Fratelli"
        text="Rua Vicente Nogueira Braga, 214 - Sala 801 - Fátima, Fortaleza - CE, 60040-570"
      />
      <LocationCard
        img={ioci}
        title="IOCI - Instituto de Odontologia e Ciências Integradas"
        text="Rua Julz Francisco Augusto de Oliveira, 17 - Patriolino Ribeiro, Fortaleza - CE, 60810-260"
        reserve
      />
      <LocationCard
        img={online}
        title="Atendimento on-line"
        text="Acompanhamento psicológico individual pela internet"
      />
    </div>
  </section>
);
export default Locations;
