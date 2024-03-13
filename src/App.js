import React ,{ useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await axios.get("https://dummyjson.com/products");
      setData(response.data.products);
    }
    
    fetchData();
    
  },[]);

  // console.log(data);
  
  return (
    <div className="box">
      {data.map((value, index) => 
        <ul key={index} className="details">
          { <img src={value.images[0]}/> }
          <h3>{value.title}</h3>
          <li>{value.description}</li>
          <button>Buy : ${value.price}</button>
        </ul>
      )}
    </div>
  );
};

export default App;