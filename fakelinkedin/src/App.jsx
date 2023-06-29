
import './App.css';
import Experiences from './Experiences';
import Footer from './Footer';
import Header from './Header';
import Profile from './Profile';
import PostsFeed from './PostsFeed';

function App() {
  return (
      <>
        <Header/>
        <div className="banner"></div>
        <div className="profile-container">
          <Profile/>
          <Experiences/>
        </div>
        <div className="banner banner2"></div>
        <PostsFeed/>
        <Footer/>
      </>
  );
}

export default App;
