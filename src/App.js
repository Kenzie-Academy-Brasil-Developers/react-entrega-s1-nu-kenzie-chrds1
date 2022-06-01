import './App.css';
import React, { useState } from "react";
import Form from './Form';
import List from './List';


function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
  ])
  console.log(listTransactions)
  return (
    <div className="App">
      <header className='App-header'>
        <div className='logo-nu'>
          <span>nu</span>
          <span>Kenzie</span>
        </div>
        <button>Início</button>
      </header>
      <main>
        <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
        <List listTransactions={listTransactions}/>

      </main>
    </div>
  );
}

export default App;
