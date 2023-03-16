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
      <ExperienceCards
        availability = 'SOLD OUT'
        rating = '5'
        status = 'Online'
        caption = 'Life lessons with katie Zaferes'
        price = '136'
      />
       <ExperienceCards
        availability = 'ONLINE'
        rating = '5'
        status = 'Online'
        caption = 'Learn Wedding Photography'
        price = '125'
      />
       <ExperienceCards
        availability = ''
        rating = '4.8'
        status = 'Norway'
        caption = 'Group Mountain Biking'
        price = '50'
      />
    </div>
  );
}

export default App;
