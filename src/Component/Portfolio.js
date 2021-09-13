import './Style.css';
import React from 'react';
import Portfo from './FilterGalary';
import { useEffect } from 'react';

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <>
          <Portfo />
        </>
    );
}
export default Portfolio;