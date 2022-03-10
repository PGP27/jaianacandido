import SessionTitle from "../SessionTitle";
import AudienceCard from "./components/AudienceCard";

const Audience = () => (
  <div className="w-full flex flex-col items-center justify-center">
    <SessionTitle title="Público atendido" />
    <div className="w-full max-w-[1536px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
      <AudienceCard image="bg-[url('/src/assets/adolescentes.png')]" name="Adolescentes" color="bg-slate-800" />
      <AudienceCard image="bg-[url('/src/assets/adultos.png')]" name="Adultos" color="bg-sky-800" />
      <AudienceCard image="bg-[url('/src/assets/idosos.png')]" name="Idosos" color="bg-emerald-800" />
      <AudienceCard image="bg-[url('/src/assets/dor.png')]" name="Pessoas com dor crônica" color="bg-red-800" />
    </div>
  </div>
);

export default Audience;
