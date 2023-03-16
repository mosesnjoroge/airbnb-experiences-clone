import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ExperienceCards from './components/Experiencecards';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data'

function App() {

  const experienceElements = data.map(experience => {

    return (

      <ExperienceCards
        id = {experience.id}
        availablity = {experience.availablity}
        rating = {experience.rating}
        status = {experience.status}
        caption = {experience.caption}
        price = {experience.price}
      />
     )
    })

  return (
    <div className="App">
      <Nav />
      <Hero />
      {experienceElements}
    </div>
  );
}

export default App;
