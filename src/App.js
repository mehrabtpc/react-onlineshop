import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductList from './components/ProductList/ProductList';
import Test from "./components/Test/Test";
import Login from "./components/Login/Login";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">خانه</Link> | <Link to="/about">درباره ما</Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={ <ProductList /> } />
        <Route path="test" element={ <Test /> } />
        <Route path="login" element={ <Login /> } />

        <Route path="*" element={<h1>صفحه یافت نشد</h1>} />

      </Routes>
    </div>
  );
}
