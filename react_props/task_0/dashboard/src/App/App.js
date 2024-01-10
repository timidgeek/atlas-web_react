import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login';
import Notifications from '../Notifications';

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
