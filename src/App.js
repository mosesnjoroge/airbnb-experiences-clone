import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ExperienceCards from './components/Experiencecards';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <Nav />
      <Hero />
      <ExperienceCards/>
    </div>
  );
}

export default App;
