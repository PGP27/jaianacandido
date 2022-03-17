import { Link } from 'react-router-dom';

interface NavBarProps {
  cNavBar: string,
  cList: string,
  cButton: string,
};

const NavBar = ({ cNavBar, cList, cButton }: NavBarProps) => (
  <nav className={cNavBar}>
    <ul className={cList}>
        <li>
          <button type="button" className={cButton}>Home</button>
        </li>
        <li>
          <button type="button" className={cButton}>Sobre</button>
        </li>
        <li>
          <button type="button" className={cButton}>Serviços</button>
        </li>
        <li>
          <button type="button" className={cButton}>Consultórios</button>
        </li>
        <li>
          <button type="button" className={cButton}>Publicações</button>
        </li>
        <li>
          <button type="button" className={cButton}>Contato</button>
        </li>
    </ul>
  </nav>
);

export default NavBar;
