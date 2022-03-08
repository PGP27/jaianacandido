import './Articles.css';

import { MdOutlineCoronavirus } from 'react-icons/md'
import { MdOutlineElderly } from 'react-icons/md'
import { MdOutlinePregnantWoman } from 'react-icons/md'
import { RiMentalHealthFill } from 'react-icons/ri'
import { FaHouseUser } from 'react-icons/fa'

import ArticleCard from './components/ArticleCard';

const Articles = () => {
  return (
    <section className="articles-container flex flex-col items-center">
      <h2 className="text-3xl text-center text-white mt-12 mb-8 underline underline-offset-8">Publicações</h2>
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <ArticleCard
            icon={MdOutlineCoronavirus}
            title="Dando significado à pandemia: o que os brasileiros pensam sobre o novo coronavírus?"
            link="https://link.springer.com/article/10.1007/s43076-021-00078-y"
          />
          <ArticleCard
            icon={MdOutlineElderly}
            title="O binômio morte e vida para idosos em cuidados paliativos"
            link="http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1677-29702021000200002&lng=pt&nrm=iso"
          />
          <ArticleCard
            icon={MdOutlinePregnantWoman}
            title="A cicatriz invisível: o ser mãe de bebês com fissura labiopalatina"
            link="http://revistas.unisinos.br/index.php/contextosclinicos/article/view/ctc.2020.132.06"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <ArticleCard
            icon={RiMentalHealthFill}
            title="Tornar-se psicoterapeuta trajetórias, saberes e desafios na atuação em psicologia clínica"
            link="https://storage.googleapis.com/editora-alfa-ciencia/documents/doc-02fb1265-56bb-4db5-8a80-9b3604350951LIVRO%20PRONTO%20-%20PSICOLOGIA-KARINE-10.09.pdf"
          />
          <ArticleCard
            icon={FaHouseUser}
            title="Ensaios da Pandemia: O Isolamento Social entre Caos e Recriação da Vida"
            link="https://www.editoraappris.com.br/produto/5030-ensaios-da-pandemia-o-isolamento-social-entre-caos-e-recriao-da-vida"
          />
        </div>
      </div>
    </section>
  );
};

export default Articles;
