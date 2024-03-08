
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter,Routes,Route, Outlet} from "react-router-dom";
import Footer from './components/Footer';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<ProductList/>}></Route>
        <Route path="/add" element={<AddProduct/>}></Route>
        <Route path="/update/:id" element={<UpdateProduct/>}></Route>
        <Route path="/logout" element={<h1>Logout Component</h1>}></Route>
        <Route path="/profile" element={<h1>Profile Component</h1>}></Route>
        </Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
