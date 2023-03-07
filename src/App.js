import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Cardgroup from './components/Cardgroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav />

      <Hero />

      <Cardgroup />
    </div>
  );
}

export default App;
