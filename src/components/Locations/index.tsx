import fratelli from '../../assets/fratelli.png';
import ser from '../../assets/ser.jpg';
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
        desc="Rua Vicente Nogueira Braga, 214 - Sala 501 - Fátima, Fortaleza - CE, 60040-570"
        mapURL="https://www.google.com.br/maps/place/Cl%C3%ADnica+de+Psicologia+Fratelli/@-3.7557435,-38.5243352,17z/data=!3m1!4b1!4m5!3m4!1s0x7c7491a345f6e39:0xd50429de08063c48!8m2!3d-3.7557839!4d-38.5221426"
      />
       <LocationCard
        image={ser}
        imgRounded
        title="Espaço Ser"
        desc="Avenida Desembargador Moreira, 2800 - 1º andar, sala 101 - Aldeota, Fortaleza - CE, 60170-172"
        mapURL="https://www.google.com.br/maps/place/Santo+Amaro+Empresarial/@-3.7500861,-38.5038942,18z/data=!3m1!4b1!4m5!3m4!1s0x7c749eb66ef4209:0xcd15263c19fcdb35!8m2!3d-3.7500861!4d-38.5031204"
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
