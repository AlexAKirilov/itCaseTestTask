import React, {FC} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {Header} from "@/widgets/header/ui/header";
import {CatalogPage} from "@/pages/catalog/ui/catalog";
import {ProductItemPage} from "@/pages/product-item/ui/product-item";
import {CartPage} from "@/pages/cart/ui/cart";

export const App: FC = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/catalogue" element={<CatalogPage />} />
            <Route path="/product" element={<ProductItemPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<Navigate to="/catalogue" replace />} />
        </Routes>
    </>
  )
}
