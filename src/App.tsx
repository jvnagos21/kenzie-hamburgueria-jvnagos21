import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { UserProvider } from "./Providers/userContext";
import { CartProvider } from "./Providers/cartContext";
import { RoutesHub as Routes } from "./routes";
function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </UserProvider>
      <ToastContainer
        position="top-center"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
