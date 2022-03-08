import { Link } from 'react-router-dom';

interface NavBarProps {
  cNavBar: string,
  cList: string,
  cButton: string,
};

const NavBar = ({ cNavBar, cList, cButton }: NavBarProps) => (
  <nav className={cNavBar}>
    <ul className={cList}>
      <Link to="/" className="w-full">
        <li>
          <button type="button" className={cButton}>Home</button>
        </li>
      </Link>
      <Link to="/sobre" className="w-full">
        <li>
          <button type="button" className={cButton}>Sobre</button>
        </li>
      </Link>
      <Link to="/servicos" className="w-full">
        <li>
          <button type="button" className={cButton}>Serviços</button>
        </li>
      </Link>
      <Link to="/consultorios" className="w-full">
        <li>
          <button type="button" className={cButton}>Consultórios</button>
        </li>
      </Link>
      <Link to="/publicacoes" className="w-full">
        <li>
          <button type="button" className={cButton}>Publicações</button>
        </li>
      </Link>
      <Link to="/contato" className="w-full">
        <li>
          <button type="button" className={cButton}>Contato</button>
        </li>
      </Link>
    </ul>
  </nav>
);

export default NavBar;
