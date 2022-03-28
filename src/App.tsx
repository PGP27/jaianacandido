import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About';
import Locations from './components/Locations';
import Publications from './components/Publications';
import Footer from './components/Footer';

const App = () => (
  <div className="font-default text-base scroll-smooth">
    <Header />
    <Welcome />
    <Locations />
    <About />
    <Publications />
    <Footer />
  </div>
);

export default App;
