import './App.css';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Navbar from './components/navbar';
import  Shop from "./pages/shop/Shop";
import  Cart  from "./pages/cart/Cart";

function App() {
  return ( 
    <div className='App'>
        <Router>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Shop/>}/> 
                <Route path='Cart' element={<Cart/>}/>
            </Routes>
        </Router>
    </div>
    );
 
}

export default App;
