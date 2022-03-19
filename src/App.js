import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer saludo="Bienvenido a Somos Luna"/>
    </>
  );
}

export default App;
