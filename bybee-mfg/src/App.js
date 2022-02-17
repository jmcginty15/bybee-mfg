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
  text: ['CNC milling is our specialty. We have manufactured thousands of parts over the last two decades ranging in tolerance from 1/16" to within 0.0001" in both low and high production runs. Our facility is well accustomed to using SolidWorks and MasterCam for our CAD/CAM needs. Most of our work has been done in aluminum, plastics, and various steels.'],
  photo: cncMillingPhoto
};

const cncTurning = {
  title: 'CNC Turning',
  text: ['All of our turning begins with selecting and cutting the appropriate stock for the operation. The stock is held in a chuck as it is rotated and cut to order. Although we are able to manufacture most designs, we do not house a 4th axis lathe at this time. We save our customers money through our efficient programming and step by step inspection to cut down on scrap parts.'],
  photo: cncTurningPhoto
};

const fabrication = {
  title: 'Fabrication',
  text: ["Our fabrication shop specializes in welding and general fabrication. If we're not personally able to do the process in-house, we are contracted with exceptional manufacturing partners in powder coating, galvanizing, electroplating, heat treating and other common industrial processes."],
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
          <Route exact path="/machining">
            <Services />
          </Route>
          <Route exact path="/machining/cnc-milling">
            <DetailPage title={cncMilling.title} text={cncMilling.text} photo={cncMilling.photo} />
          </Route>
          <Route exact path="/machining/cnc-turning">
            <DetailPage title={cncTurning.title} text={cncTurning.text} photo={cncTurning.photo} />
          </Route>
          <Route exact path="/machining/fabrication">
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
