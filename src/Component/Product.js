import './Style.css';
import React from 'react';
import Products from './Product/Category';
import  { useEffect } from 'react';


function Product() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <Products />
        </>
    );
}
export default Product;