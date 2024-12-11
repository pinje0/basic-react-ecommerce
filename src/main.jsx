import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import PageNotFound from "./pages/404";
import ProductsPage from "./pages/products";
import ProfilePage from "./pages/profile";
import DetailProductPage from "./pages/detailProduct";
import { Provider } from "react-redux";
import store from "./redux/store";
import DarkModeContextProvider from "./context/DarkMode";
import { TotalPriceProvider } from "./context/TotalPriceContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>test</div>,
    errorElement: <PageNotFound />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </StrictMode>
);
