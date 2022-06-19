import React from 'react'
import { Link } from 'react-router-dom'
import product from '../image/product.jpg'



const Home = () => {
  return (
    <div >
      <Link to={"/products"}>
        <h1>GO TO PRODUCT PAGE</h1>
        <img src={product} style={{height:300, width:600, alignItems:"center"}} />
      </Link>
    </div>
  );
}

export default Home