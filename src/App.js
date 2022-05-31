import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Form from './Form';
import List from './List';

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
  ])

  return (
    <div className="App">
      <header className="App-header">
        <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
        <List listTransactions={listTransactions}/>
      </header>
    </div>
  );
}

export default App;
