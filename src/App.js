import './App.css';
import React, { useState } from "react";
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import { GlobalStyle, HeaderStyle, MainStyle } from './style/style';


function App() {
  const [listTransactions, setListTransactions] = useState([])
  const[list, setList] = useState(listTransactions)

  console.log(listTransactions)
  return (
    <>
    <GlobalStyle/>
    <div className="App">
      <HeaderStyle>
      <header className='App-header'>
        <div className='logo-nu'>
          <span className='logo1'>Nu</span><span className='logo2' >Kenzie</span>
        </div>
        <button>Início</button>
      </header>
      </HeaderStyle>
      <MainStyle>
      <main>
        <section>
          <Form  list={list} setList={setList} listTransactions={listTransactions} setListTransactions={setListTransactions}/>
          <TotalMoney listTransactions={listTransactions}/>
        </section>
        <List list={list} setList={setList} listTransactions={listTransactions} setListTransactions={setListTransactions}/>
        
      </main>
      </MainStyle>
    </div>
    </>
  );
}

export default App;
