import './App.css';
import React, { useState } from "react";
import Header from "./component/Header";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";


function App() {
  const [ cont, setCont ] = useState(0);

  const handleSetCont = (value) => {
    const newCont = cont + value;
    setCont(newCont);

  
  if (newCont > 0 && (setCont % 3 === 0 || newCont.toString().includes('3') || newCont.toString().includes('6') || newCont.toString().includes('9'))) {
    setTimeout(()=> alert("👏"), 200);
  }
};

return (
    <div className="App">
      <Header />
      <section>
        <Viewer cont = {cont} />
      </section>
      <section>
        <Controller handleSetCont = {handleSetCont} />
      </section>
    </div>
  );
};

export default App;
