import './App.css';
import React, { useState } from "react";
import Form from './components/Form';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import { GlobalStyle, HeaderStyle, MainStyle } from './style/style';


function App() {
  const [listTransactions, setListTransactions] = useState([])
  const [list, setList] = useState(listTransactions)

  function filtro(event){
    if(event !==undefined && event.target.innerText === "Entradas"){
        const entradas = listTransactions.filter((item)=>item.type === "entrada")
        return setList(entradas)
    }else if(event !==undefined && event.target.innerText === "Saídas"){
        const saidas = listTransactions.filter((item)=>item.type === "saída")
        return setList(saidas)
    } else {
        const todos = listTransactions.filter((item)=>item)
        return setList(todos)
    }
  }

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
        <aside>
          <Form list={list} setList={setList} listTransactions={listTransactions} setListTransactions={setListTransactions} filtro={filtro}/>
          <TotalMoney listTransactions={listTransactions}/>
        </aside>
        <section>
          <List list={list} setList={setList} listTransactions={listTransactions} setListTransactions={setListTransactions} filtro={filtro}/>
          </section>
      </main>
      </MainStyle>
    </div>
    </>
  );
}

export default App;
