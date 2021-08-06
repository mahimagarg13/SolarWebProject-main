import './Style.css';
import React from 'react';
import Hero from "./Home/Hero"
import Offer from "./Home/Offer"
import Aboutus from "./Home/Aboutus"
import Discover from './Home/Discover';
import Choose from './Home/Choose';
import Counter from './Home/Counter';
// import Newsletter from './Newsletter';
// import Footer from './Footer';
function Home() {
  return (
    <>
      <Hero />
      <Offer />
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