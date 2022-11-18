import "./App.css";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RootRouter from './components/Router/RootRouter';
function App() {
  return (
    <div className="App">
      <Header />
      <RootRouter />
      <Footer />
    </div>
  );
}

export default App;
