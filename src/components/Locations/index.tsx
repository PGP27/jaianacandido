import fratelli from '../../assets/fratelli.png';
import ioci from '../../assets/ioci.png';
import online from '../../assets/online.png';
import SessionTitle from "../SessionTitle";
import LocationCard from "./components/LocationCard";

const Locations = () => (
  <div className="w-full bg-white flex flex-col items-center justify-center">
    <SessionTitle title="Locais de atendimento" bgColor="bg-white" lineColor="bg-red-400" />
    <div className="max-w-[1536px] my-10 flex flex-col">
      <LocationCard
        image={fratelli}
        title="Clínica de Psicologia Fratelli"
        desc="Rua Vicente Nogueira Braga, 214 - Sala 801 - Fátima, Fortaleza - CE, 60040-570"
        color=""
      />
       <LocationCard
        image={ioci}
        title="IOCI - Instituto de Odontologia e Ciências Integradas"
        desc="Rua Julz Francisco Augusto de Oliveira, 17 - Patriolino Ribeiro, Fortaleza - CE, 60810-260"
        color=""
      />
       <LocationCard
        image={online}
        title="Atendimento on-line"
        desc="Acompanhamento psicológico individual pela internet"
        color=""
      />
    </div>
  </div>
);

export default Locations;
