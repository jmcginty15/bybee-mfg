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
  text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas integer eget aliquet nibh praesent. Nam aliquam sem et tortor consequat id porta. Ullamcorper dignissim cras tincidunt lobortis feugiat. Nunc sed augue lacus viverra. Quam adipiscing vitae proin sagittis. In tellus integer feugiat scelerisque varius. Netus et malesuada fames ac turpis egestas maecenas pharetra. Neque aliquam vestibulum morbi blandit cursus risus at. Sapien faucibus et molestie ac feugiat sed lectus. Sed viverra ipsum nunc aliquet bibendum enim. Arcu odio ut sem nulla pharetra diam. Nec ultrices dui sapien eget mi proin sed.'],
  photo: cncMillingPhoto
};

const cncTurning = {
  title: 'CNC Turning',
  text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas integer eget aliquet nibh praesent. Nam aliquam sem et tortor consequat id porta. Ullamcorper dignissim cras tincidunt lobortis feugiat. Nunc sed augue lacus viverra. Quam adipiscing vitae proin sagittis. In tellus integer feugiat scelerisque varius. Netus et malesuada fames ac turpis egestas maecenas pharetra. Neque aliquam vestibulum morbi blandit cursus risus at. Sapien faucibus et molestie ac feugiat sed lectus. Sed viverra ipsum nunc aliquet bibendum enim. Arcu odio ut sem nulla pharetra diam. Nec ultrices dui sapien eget mi proin sed.'],
  photo: cncTurningPhoto
};

const fabrication = {
  title: 'Fabrication',
  text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas integer eget aliquet nibh praesent. Nam aliquam sem et tortor consequat id porta. Ullamcorper dignissim cras tincidunt lobortis feugiat. Nunc sed augue lacus viverra. Quam adipiscing vitae proin sagittis. In tellus integer feugiat scelerisque varius. Netus et malesuada fames ac turpis egestas maecenas pharetra. Neque aliquam vestibulum morbi blandit cursus risus at. Sapien faucibus et molestie ac feugiat sed lectus. Sed viverra ipsum nunc aliquet bibendum enim. Arcu odio ut sem nulla pharetra diam. Nec ultrices dui sapien eget mi proin sed.'],
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
