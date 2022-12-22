import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/orders";
import Products from "./pages/product";
import Purchase from "./pages/Purchases";
import PurchaseInvoice from "./pages/Purchases/PurchaseInvoice";
import Sales from "./pages/sales";
import Users from "./pages/Users";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Purchases" element={<Purchase/>} />
          <Route path="/product" element={<Products/>} />
          <Route path="/sales" element={<Sales/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/PurchaseInvoice" element={<PurchaseInvoice/>} />
        </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
