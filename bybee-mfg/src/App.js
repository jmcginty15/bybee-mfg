import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import NavBar from './components/nav/NavBar';
import Contact from './components/contact/Contact';
import Quote from './components/quote/Quote';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import DetailPage from './components/services/DetailPage';
import Footer from './components/footer/Footer';
import cncMillingPhoto from './components/services/images/cnc-milling.jpg';
import cncTurningPhoto from './components/services/images/cnc-turning.jpg';
import fabricationPhoto from './components/services/images/fabrication.jpg';
import logo from './logo.svg';
import './App.css';

const cncMilling = {
  title: 'CNC Milling',
  text: [
    'CNC (Computer Numerical Controlled) Milling is a machining process which requires computerized controls and rotating multi-point cutting tools to remove material by advancing the tool into the material. This process allows custom-designed components to be manufactured with high-precision tolerances ranging from +/-0.001″ – 0.005″.',
    'We have 4-axis and 5-axis milling capabilities that can rapidly create parts to our customers specifications. CNC Mills are controlled with G-code programs with CAD/CAM Software.',
    'CNC Mills were created for manufacturing precise, repeatable parts. This functionality makes them ideal for prototyping, and low-to-high volume production runs. CNC Mills are able to cut a variety of metals ranging from aluminum to titanium, as well as plastics.'
  ],
  photo: cncMillingPhoto
};

const cncTurning = {
  title: 'CNC Turning',
  text: [
    'CNC (Computer Numerical Controlled) Turning begins by holding material in the chuck or collet of a lathe, where it is rotated at high speeds while being cut into the appropriate shape. The metal is rotated at various speeds, and the cutting tool moves in specific paths to cut and turn the material into the desired high precision part.',
    'The process of CNC Turning allows us to create components that are straight, conical, curved or grooved. Our turning centers also have 4 axis milling capabilities.  Each material has an ideal set of tools that have been developed through programming and a validation process to create the most cost effective and efficient manufacturing process possible.'
  ],
  photo: cncTurningPhoto
};

const fabrication = {
  title: 'Fabrication',
  text: [
    'Our capabilities include a variety of sheet metal bending, punching, forming and welding processes. Our TruPunch Press is well suited for thin-gage precision components, which are often then formed on our 7-axis press brakes. We accomplish all deburr and preparation for finish work in-house, and contract with exceptional painting and anodizing partners.',
    'Our U.S. Department of Labor Certified Welding Apprenticeship Program has enabled us to train our own staff of Journey-Level TIG Welders, providing greater in-house value and flexibility.'
  ],
  photo: fabricationPhoto
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/services/cnc-milling">
            <DetailPage title={cncMilling.title} text={cncMilling.text} photo={cncMilling.photo} />
          </Route>
          <Route exact path="/services/cnc-turning">
            <DetailPage title={cncTurning.title} text={cncTurning.text} photo={cncTurning.photo} />
          </Route>
          <Route exact path="/services/fabrication">
            <DetailPage title={fabrication.title} text={fabrication.text} photo={fabrication.photo} />
          </Route>
          {/* <Route exact path="/projects">
            <Projects />
          </Route> */}
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/quote">
            <Quote />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
