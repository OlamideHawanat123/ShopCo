import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import Product from "./Pages/Product";
import AppLayout from "./Layouts/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
