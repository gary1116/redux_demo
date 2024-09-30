import Navbar from "./Components/Navbar";
import Modal from "./Components/Modal";
import CartContainer from "./Components/CartContainer";
import { useDispatch,useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const {isOpen} =useSelector((store)=>store.modal)
  const {cartItems} =useSelector((store)=>store.cart);
  const dispatch=useDispatch();
  useEffect(()=>{
dispatch(calculateTotals())
  },[cartItems])
  return (
    <main>

      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
