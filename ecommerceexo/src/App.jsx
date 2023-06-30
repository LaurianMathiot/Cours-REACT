import Allproducts from './Allproducts';
import './App.css';
import Asidecart from './Asidecart';
import Footer from './Footer';
import Header from './Header';
import Lastproducts from './Lastproducts';

function App() {

  const cartFromApi = {
    items: [
      {
        product: "Chaise",
        amount: 200,
        quantity: 2,
      },
    ],
    totalAmount: 400,
    createdAt: "2021-09-01T10:00:00.000Z",
    user: "John Doe",
  }; 

  const productsFromApi = [
    {
      name: "Chaise",
      price: 100,
      description: "Une chaise",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "meuble",
    },
    {
      name: "Table",
      price: 200,
      description: "Une table",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "meuble",
    },
    {
      name: "Canapé",
      price: 300,
      description: "Un canapé",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "meuble",
    },
    {
      name: "Télé",
      price: 400,
      description: "Une télé",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "électroménager",
    },
    {
      name: "Frigo",
      price: 500,
      description: "Un frigo",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "électroménager",
    },
    {
      name: "Four",
      price: 600,
      description: "Un four",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "électroménager",
    },
  ]; 



  return (
    <>
      <Header cartFromApi={cartFromApi}/>
      <div className="container">
        <div className="main-sections">
        <Lastproducts productsFromApi={productsFromApi}/>
        <Allproducts productsFromApi={productsFromApi}/>
        </div>
        <div className="aside">
          <Asidecart cartFromApi={cartFromApi} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
