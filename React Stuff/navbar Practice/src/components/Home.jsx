import React from "react";
import Products from "./Products";

const Home = () =>{
  const arr = [1,2,3,4,5,6,7,8,9,10];
    return(
        <>
            <h1>Home Page</h1>
            <h3>
                {
                    arr.map(i=>(
                        <Products value={i}/>
                    ))
                }
            </h3>
        </>
    );
}

export default Home;