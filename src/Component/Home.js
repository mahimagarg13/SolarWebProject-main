import './Style.css';
import  { useEffect } from 'react';
import Hero from "./Home/Hero"
import Aboutus from "./Home/Aboutus"
import Discover from './Home/Discover';
import Choose from './Home/Choose';
import Counter from './Home/Counter';
// import Newsletter from './Newsletter';
// import Footer from './Footer';
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Hero />
      
      <Aboutus />
      <Discover />
      <Counter />
      <Choose />
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </>
  );
}
export default Home;