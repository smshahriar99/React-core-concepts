import React, { useEffect, useState } from "react";
//import logo from "./logo.svg";
import "./App.css";

// function App() {
//   const product = [
//     { name: "shirt", price: "230" },
//     { name: "T-shirt", price: "250" },
//     { name: "shoe", price: "130" },
//     { name: "belt", price: "430" },
//     { name: "mpney bag", price: "200" },
//   ];
//   return (
//     <div className="App">
//       <DynamicData></DynamicData>
//       <Count></Count>
//       {product.map((product) => (
//         <Person product={product}></Person>
//       ))}
//     </div>
//   );
// }
// function DynamicData() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   });
//   return (
//     <div>
//       <ul>
//         {users.map((user) => (
//           <li>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// function Count() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button id="decrease" onMouseOut={() => setCount(count - 1)}>
//         Decrease
//       </button>
//     </div>
//   );
// }
// function Person(props) {
//   let style = {
//     border: "2px solid red",
//     padding: "5px",
//     margin: "5px",
//     backgroundColor: "green",
//     color: "white",
//     width: "250px",
//     height: "250px",
//     display: "fle",
//     float: "left",
//   };

//   return (
//     <div style={style}>
//       <h2>{props.product.name}</h2>
//       <br />
//       <h4>$ {props.product.price}</h4>
//       <button>Order Now</button>
//     </div>
//   );
// }
function App() {
  const products = [
    { name: "shirt", price: "230" },
    { name: "T-shirt", price: "250" },
    { name: "shoe", price: "130" },
    { name: "belt", price: "430" },
    { name: "mpney bag", price: "200" },
  ];
  return (
    <div className="App">
      <Count></Count>
      <User></User>
      {products.map((product) => (
        <Product product={product}></Product>
      ))}
    </div>
  );
}
function Product(props) {
  let style = {
    border: "2px solid red",
    padding: "5px",
    margin: "5px",
    backgroundColor: "green",
    color: "white",
    width: "250px",
    height: "250px",
    display: "fle",
    float: "left",
  };
  return (
    <div style={style}>
      <h2>{props.product.name}</h2>
      <h2>{props.product.price}</h2>
      <button>Order Now</button>
    </div>
  );
}
function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
      <h2>Email</h2>
      <ul>
        {users.map((user) => (
          <li>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
