import jaiana from '../assets/jaiana.jpeg';

const Home = () => (
  <div>
    <div className="flex items-center justify-center">
      <div>
        <div>
          <p>Olá! <span>Sou Jaiana Cândido.</span></p>
          <p>Psicóloga clínica.</p>
        </div>
        <p>Gestalt-terapia e dor</p>
        <button>Agende sua sessão!</button>
        <div></div>
      </div>
      <div>
       <img src={jaiana} alt="Jaiana Cândido" className="h-20" />
      </div>
    </div>
  </div>
);

export default Home;
