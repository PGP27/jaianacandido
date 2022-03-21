import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../../assets/logo.png';
import NavBar from './components/NavBar';

const Header = () => (
  <div>
    <header className="relative z-10 bg-white flex items-center justify-between py-6 px-4 shadow-md lg:px-12">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12" />
        <h1 className="hidden sm:block text-2xl ml-4">Jaiana Cândido</h1>
      </div>
      <button
        type="button"
        aria-label="menu"
        className="p-2 rounded-full lg:hidden hover:shadow-inner hover:bg-slate-100"
        onClick={() => {
          const menu = document.querySelector('.mobile-menu');
          menu?.classList.toggle('-translate-y-full');
        }}
      >
        <GiHamburgerMenu fontSize={20} />
      </button>
      <NavBar
        cNavBar="hidden lg:block"
        cList="flex"
        cButton="mx-4 hover:text-emerald-700 transition"
      />
    </header>
    <NavBar
      cNavBar="mobile-menu bg-slate-50 border-b absolute z-0 w-full top-[96px] left-0 transform -translate-y-full transition duration-300 ease-in-out lg:hidden"
      cList="flex flex-col items-center"
      cButton="w-full p-4 text-lg hover:text-emerald-700 transition"
    />
  </div>
);

export default Header;
