interface NavBarProps {
  cNavBar: string,
  cList: string,
  cButton: string,
};

const NavBar = ({ cNavBar, cList, cButton }: NavBarProps) => (
  <div className={cNavBar}>
    <div className={cList}>
        <a href="#sobre">
          <div>
            <button type="button" className={cButton}>Sobre</button>
          </div>
        </a>
        <a href="#consultorios">
          <div>
            <button type="button" className={cButton}>Consultórios</button>
          </div>
        </a>
        <a href="#publicacoes">
          <div>
            <button type="button" className={cButton}>Publicações</button>
          </div>
        </a>
        <a href="#sobre">
          <div>
            <button type="button" className={cButton}>Contato</button>
          </div>
        </a>
    </div>
  </div>
);

export default NavBar;
