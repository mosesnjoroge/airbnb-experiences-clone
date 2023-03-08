import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Cardgroup from './components/Cardgroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Cloudinary} from "@cloudinary/url-gen";

function App() {
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dtxxea3qi'
    }
  });

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Cardgroup>
      </Cardgroup>
    </div>
  );
}

export default App;
