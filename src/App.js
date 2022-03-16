import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
/* import Itemcount from './components/ItemCount'; */



function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer saludo="Bienvenido a Somos Luna"/>
      {/* <Itemcount stock="5" initial="1" /> */}
    </>
  );
}

export default App;
