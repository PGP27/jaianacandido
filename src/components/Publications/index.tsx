import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import SessionTitle from '../SessionTitle';
import Slide from './components/Slide';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

const Publications = () => (
  <div id="publicacoes" className="mb-10">
    <SessionTitle title="Publicações" bgColor="bg-white" lineColor="bg-green-600" />
    <div className="sm:hidden py-10 px-8 underline underline-offset-2">
      <ol>
        <li className="my-10">
          <a
            className="hover:text-blue-900"
            target="_blank"
            rel="noreferrer"
            href="http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1677-29702021000200002&lng=pt&nrm=iso"
          >
            1. O binômio morte e vida para idosos em cuidados paliativos
          </a>
        </li>
        <li className="my-10">
          <a
            className="hover:text-blue-900 transition"
            target="_blank"
            rel="noreferrer"
            href="http://revistas.unisinos.br/index.php/contextosclinicos/article/view/ctc.2020.132.06"
          >
            2. A cicatriz invisível: o ser mãe de bebês com fissura labiopalatina
          </a>
        </li>
        <li className="my-10">
          <a
            className="hover:text-blue-900 transition"
            target="_blank"
            rel="noreferrer"
            href="https://storage.googleapis.com/editora-alfa-ciencia/documents/doc-02fb1265-56bb-4db5-8a80-9b3604350951LIVRO%20PRONTO%20-%20PSICOLOGIA-KARINE-10.09.pdf"
          >
            3. Tornar-se psicoterapeuta: trajetórias, saberes e desafios na atuação em psicologia clínica
          </a>
        </li>
        <li className="my-10">
          <a
            className="hover:text-blue-900 transition"
            target="_blank"
            rel="noreferrer"
            href="https://link.springer.com/article/10.1007/s43076-021-00078-y"
          >
            4. Dando significado à pandemia: o que os brasileiros pensam sobre o novo coronavírus?
          </a>
        </li>
        <li className="my-10">
          <a
            className="hover:text-blue-900 transition"
            target="_blank"
            rel="noreferrer"
            href="https://www.editoraappris.com.br/produto/5030-ensaios-da-pandemia-o-isolamento-social-entre-caos-e-recriao-da-vida"
          >
            5. Ensaios da Pandemia: O Isolamento Social entre Caos e Recriação da Vida
          </a>
        </li>
      </ol>
    </div>
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
        slideShadows: false,
      }}
      slidesPerView={3}
      centeredSlides
      modules={[EffectCoverflow, Navigation, Pagination]}
      className="hidden sm:block h-full max-w-[1536px] py-16"
    >
      <SwiperSlide className="h-80 flex justify-center rounded-lg">
        <Slide
          image="bg-[url('/src/assets/idosa.jpg')] bg-no-repeat bg-cover bg-center transition hover:scale-105"
          title="O binômio morte e vida para idosos em cuidados paliativos"
          link="http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1677-29702021000200002&lng=pt&nrm=iso"
        />
      </SwiperSlide>
      <SwiperSlide className="h-80 flex justify-center">
        <Slide
          image="bg-[url('/src/assets/bebe.jpg')] bg-no-repeat bg-cover bg-center transition hover:scale-105"
          title="A cicatriz invisível: o ser mãe de bebês com fissura labiopalatina"
          link="http://revistas.unisinos.br/index.php/contextosclinicos/article/view/ctc.2020.132.06"
        />
      </SwiperSlide>
      <SwiperSlide className="h-80 flex justify-center">
        <Slide
          image="bg-[url('/src/assets/psicoterapia.jpg')] bg-no-repeat bg-cover bg-center transition hover:scale-105"
          title="Tornar-se psicoterapeuta: trajetórias, saberes e desafios na atuação em psicologia clínica"
          link="https://storage.googleapis.com/editora-alfa-ciencia/documents/doc-02fb1265-56bb-4db5-8a80-9b3604350951LIVRO%20PRONTO%20-%20PSICOLOGIA-KARINE-10.09.pdf"
        />
      </SwiperSlide>
      <SwiperSlide className="h-80 flex justify-center">
        <Slide
          image="bg-[url('/src/assets/brasilcorona.jpg')] bg-no-repeat bg-cover bg-center transition hover:scale-105"
          title="Dando significado à pandemia: o que os brasileiros pensam sobre o novo coronavírus?"
          link="https://link.springer.com/article/10.1007/s43076-021-00078-y"
        />
      </SwiperSlide>
      <SwiperSlide className="h-80 flex justify-center">
        <Slide
          image="bg-[url('/src/assets/isolamento.jpg')] bg-no-repeat bg-cover bg-center transition hover:scale-105"
          title="Ensaios da Pandemia: O Isolamento Social entre Caos e Recriação da Vida"
          link="https://www.editoraappris.com.br/produto/5030-ensaios-da-pandemia-o-isolamento-social-entre-caos-e-recriao-da-vida"
        />
      </SwiperSlide>
    </Swiper>
  </div>
);

export default Publications;
