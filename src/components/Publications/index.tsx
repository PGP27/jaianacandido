import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import Slide from './components/Slide';
import 'swiper/css';
import 'swiper/css/effect-cards';
import "swiper/css/navigation";
import "swiper/css/pagination";
import SessionTitle from '../SessionTitle';

const Publications = () => (
  <div className="bg-slate-800">
    <SessionTitle title="Publicações" color="text-white" bgColor="bg-slate-800" lineColor="bg-yellow-300" />
    <Swiper
      effect={"coverflow"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
      }}
      slidesPerView={3}
      centeredSlides
      modules={[EffectCoverflow, Navigation, Pagination]}
      className="h-full w-[1536px] py-16"
    >
      <SwiperSlide className="h-80">
        <Slide
          image="bg-[url('/src/assets/idosa.jpg')] bg-no-repear bg-cover bg-center"
          title="O binômio morte e vida para idosos em cuidados paliativos"
          link="http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1677-29702021000200002&lng=pt&nrm=iso"
        />
      </SwiperSlide>
      <SwiperSlide className="h-80">
        <Slide
          image="bg-[url('/src/assets/bebe.jpg')] bg-no-repear bg-cover bg-center"
          title="A cicatriz invisível: o ser mãe de bebês com fissura labiopalatina"
          link="http://revistas.unisinos.br/index.php/contextosclinicos/article/view/ctc.2020.132.06"
        />
      </SwiperSlide>
      <SwiperSlide className="h-80">
        <Slide
          image="bg-[url('/src/assets/psicoterapia.jpg')] bg-no-repear bg-cover bg-center"
          title="Tornar-se psicoterapeuta: trajetórias, saberes e desafios na atuação em psicologia clínica"
          link="https://storage.googleapis.com/editora-alfa-ciencia/documents/doc-02fb1265-56bb-4db5-8a80-9b3604350951LIVRO%20PRONTO%20-%20PSICOLOGIA-KARINE-10.09.pdf"
        />
      </SwiperSlide>
      <SwiperSlide className="h-80">
        <Slide
          image="bg-[url('/src/assets/brasilcorona.jpg')] bg-no-repear bg-cover bg-center"
          title="Dando significado à pandemia: o que os brasileiros pensam sobre o novo coronavírus?"
          link="https://link.springer.com/article/10.1007/s43076-021-00078-y"
        />
      </SwiperSlide>
      <SwiperSlide className="h-80">
        <Slide
          image="bg-[url('/src/assets/isolamento.jpg')] bg-no-repear bg-cover bg-center"
          title="Ensaios da Pandemia: O Isolamento Social entre Caos e Recriação da Vida"
          link="https://www.editoraappris.com.br/produto/5030-ensaios-da-pandemia-o-isolamento-social-entre-caos-e-recriao-da-vida"
        />
      </SwiperSlide>
    </Swiper>
  </div>
);

export default Publications;
