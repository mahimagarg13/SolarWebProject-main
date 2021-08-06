import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import './Component/Style.css';
import Nav from './Component/Nav';
import Home from './Component/Home';
import Service from './Component/Service';
import Portfolio from './Component/Portfolio';
import Product from './Component/Product';
import Contact from './Component/Contact';
import About from './Component/About';
import Footer from './Component/Footer';
import Watercooler from './Component/Product/Watercooler';
import Rooftop from './Component/Product/Rooftop';
// import Newsletter from './Component/Newsletter';
import  { Switch , Route , BrowserRouter } from "react-router-dom";
import Streetlight from './Component/Product/Streetlight';
import WaterHeater from './Component/Product/WaterHeater';
import Hybridsystem from './Component/Product/Hybridsystem';
import WaterPurifier from './Component/Product/WaterPurifier';
import Softnersystem from './Component/Product/Softnersystem';
import NonPresssurePump from './Component/Product/NonPresssurePump';
import SubmersiblePump from './Component/Product/SubmersiblePump';
import Booster from './Component/Product/Booster';
import GrundosPump from './Component/Product/GrundosPump';
import LubiPump from './Component/Product/LubiPump';

function App() {
  return (<>
    <BrowserRouter>
      <Nav/>
      <Switch>
      <Route exact path= "/" component={Home} />
      <Route exact path= "/product" component={Product} />
      <Route exact path= "/service" component={Service} />
      <Route exact path= "/portfolio" component={Portfolio} />
      <Route exact path= "/about" component={About} />
      <Route exact path= "/contact" component={Contact} />
      <Route exact path= "/watercooler" component={Watercooler} />
      <Route exact path= "/rooftop" component={Rooftop} />
      <Route exact path= "/streetlight" component={Streetlight} />
      <Route exact path= "/hybridsystem" component={Hybridsystem} />
      <Route exact path= "/waterHeater" component={WaterHeater} />
      <Route exact path= "/waterpurifier" component={WaterPurifier} />
      <Route exact path= "/softnersystem" component={Softnersystem} />
      <Route exact path= "/nonPresssurePump" component={NonPresssurePump} />
      <Route exact path= "/submersiblePump" component={SubmersiblePump} />
      <Route exact path= "/booster" component={Booster} />
      <Route exact path= "/grundosPump" component={GrundosPump} />
      <Route exact path= "/lubiPump" component={LubiPump} />

      </Switch>
      {/* <Newsletter /> */}
      <Footer />
    </BrowserRouter>
  </>
  );
};

export default App;
