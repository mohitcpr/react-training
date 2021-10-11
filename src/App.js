import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Ratnesh from "./components/Ratnesh";
// 1. mounting
// 2. updating
// 3. unmounting
// useEffect hooks

function App() {
  let fname = "Pranjal";
  let lname = "Singh";
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(0);
  const nameRef = useRef(null);

  return (
    <div className="App">
      <Ratnesh
        type="email"
        ph="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Ratnesh type="number" ph="Enter Phone" />
      <Ratnesh type="password" ph="Enter Password" />
      <div>{email}</div>
    </div>
  );
}

export default App;
