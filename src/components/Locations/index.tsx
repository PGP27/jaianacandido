import fratelli from '../../assets/fratelli.png';
import ioci from '../../assets/ioci.png';
import online from '../../assets/online.png';
import SessionTitle from "../SessionTitle";
import LocationCard from "./components/LocationCard";

const Locations = () => (
  <div id="consultorios" className="w-full bg-white flex flex-col items-center justify-center">
    <SessionTitle title="Locais de atendimento" bgColor="bg-white" lineColor="bg-yellow-500" />
    <div className="max-w-[1536px] my-10 flex flex-col lg:flex-row">
      <LocationCard
        image={fratelli}
        title="Clínica de Psicologia Fratelli"
        desc="Rua Vicente Nogueira Braga, 214 - Sala 801 - Fátima, Fortaleza - CE, 60040-570"
        mapURL="https://www.google.com.br/maps/place/Cl%C3%ADnica+de+Psicologia+Fratelli/@-3.7557435,-38.5243352,17z/data=!3m1!4b1!4m5!3m4!1s0x7c7491a345f6e39:0xd50429de08063c48!8m2!3d-3.7557839!4d-38.5221426"
      />
       <LocationCard
        image={ioci}
        title="IOCI - Instituto de Odontologia e Ciências Integradas"
        desc="Rua Julz Francisco Augusto de Oliveira, 17 - Patriolino Ribeiro, Fortaleza - CE, 60810-260"
        mapURL="https://www.google.com.br/maps/place/IOCI+-+Instituto+de+Odontologia+e+Ci%C3%AAncias+Integradas/@-3.7604319,-38.4900761,17z/data=!3m1!4b1!4m5!3m4!1s0x7c748a62bca22d1:0x55ea762fdca1b057!8m2!3d-3.7604373!4d-38.4878874"
      />
       <LocationCard
        image={online}
        title="Atendimento on-line"
        desc="Acompanhamento psicológico individual pela internet"
      />
    </div>
  </div>
);

export default Locations;
