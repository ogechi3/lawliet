import './App.css'
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero/Hero'
import Navbar from './component/Navbar/Navbar'
import Terms from './component/Terms/Terms';
import Testimonial from './component/Testimonial/Testimonial';


function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <About/>
      <Testimonial/>
      <Terms/>
      <Footer/>
      
    </div>
  );
}
 

export default App
