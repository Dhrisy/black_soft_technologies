import './App.css';
import Home from './home/home';
import Services from './services/Services';
import About from './about/About';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

function App() {
  return (
    <div className='app_container'>
      <Home/>
      <Services/>
      <About />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
