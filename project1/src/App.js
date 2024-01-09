import './App.css';
import { useEffect, useState } from 'react';
import Controller from './component/Controller';
import Viewer from "./component/Viewer";
import { useRef } from "react";
import Even from "./component/Even";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText ] = useState("");


  const handleSetCount = (value) => {
    setCount (count + value);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const didMountRef = useRef(false);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count = {count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <input vlaue = {text} onChange = {handleChangeText} />
      </section>
    </div>
  );
}


export default App;
