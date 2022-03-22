interface NavBarProps {
  cNavBar: string,
  cList: string,
  cButton: string,
};

const NavBar = ({ cNavBar, cList, cButton }: NavBarProps) => (
  <nav className={cNavBar}>
    <ul className={cList}>
        <a href="#sobre">
          <li>
            <button type="button" className={cButton}>Sobre</button>
          </li>
        </a>
        <a href="#consultorios">
          <li>
            <button type="button" className={cButton}>Consultórios</button>
          </li>
        </a>
        <a href="#publicacoes">
          <li>
            <button type="button" className={cButton}>Publicações</button>
          </li>
        </a>
        <a href="#sobre">
          <li>
            <button type="button" className={cButton}>Contato</button>
          </li>
        </a>
    </ul>
  </nav>
);

export default NavBar;
