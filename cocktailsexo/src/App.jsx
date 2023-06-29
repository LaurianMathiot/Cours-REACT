import './App.css';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Allcocktails from './Allcocktails';
import Randomcocktails from './Randomcocktails';
import Lastcocktails from './Lastcocktails';

function App() {

  const userFromApi= {
    firstName: "John",
    lastName: "Doe",
    age: 42,
    email: "contact@johndoe.fr",
    phone: "0123456789",
    adress: "1 rue de la Paix",
    city: "Paris",
    zipCode: "75000",
    country: "France",
    job: "Développeur web",
  };

  const cocktailsFromApi = [
    {
      id: 1,
      name: "Mojito",
      price: 8,
      ingredients: ["Rhum", "Menthe", "Citron vert", "Eau gazeuse"],
      isPublished: true,
    },
    {
      id: 2,
      name: "Margarita",
      price: 10,
      ingredients: ["Tequila", "Triple sec", "Citron vert"],
      isPublished: true,
    },
    {
      id: 3,
      name: "Sangria",
      price: 6,
      ingredients: ["Vin rouge", "Fruits", "Sucre"],
      isPublished: false,
    },
    {
      id: 4,
      name: "Pina colada",
      price: 12,
      ingredients: ["Rhum", "Lait de coco", "Jus d'ananas"],
      isPublished: true,
    }
  ];

  return (
    <>
      <Header userFromApi={userFromApi}/>
      <div className='main-container'>
        <Sidebar userFromApi={userFromApi}/>
        <div className="main-section">
          <Randomcocktails cocktailsFromApi={cocktailsFromApi}/>
          <Lastcocktails cocktailsFromApi={cocktailsFromApi}/>
          <Allcocktails cocktailsFromApi={cocktailsFromApi}/>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
