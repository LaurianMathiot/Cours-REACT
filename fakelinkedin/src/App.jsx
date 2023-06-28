
import './App.css';
import Experiences from './Experiences';
import Footer from './Footer';
import Header from './Header';
import Profile from './Profile';

function App() {
  return (
      <>
        <Header/>
        <div className="banner"></div>
        <div className="profile-container">
          <Profile/>
          <Experiences/>
        </div>
        <Footer/>
      </>
  );
}

export default App;
