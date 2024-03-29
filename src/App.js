import Navbar from "./components/navbar/navbar";
import Store from "./pages/store";
import Cart from "./pages/cart";
import Authenticate from "./pages/authentiacte";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <><Navbar/>
    <Routes>
      <Route path="/" element={<Store/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/authenticate" element={<Authenticate/>}/>
    </Routes></>
  );
}

export default App;
