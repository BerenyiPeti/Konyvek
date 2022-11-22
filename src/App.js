import Konyv from './Konyv.js';

import './App.css';

const konyveim =  [
  {
    id: 1,
    szerzo: 'xy',
    cim: 'asd',
    ar: 500000 
  },
  {
    id: 2,
    szerzo: 'yx',
    cim: 'dsa',
    ar: 100000 
  },
  {
    id: 3,
    szerzo: 'zy',
    cim: 'sad',
    ar: 50000000000 
  },
]
function App() {

  function kosarFeldolgoz(adat) {
    console.log(adat);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      <article className="konyvek">
      {
        konyveim.map((konyv, index)=>{
          return (<Konyv konyvAdat={konyv} key={index} kosarKattintasMetodus={kosarFeldolgoz}/>)
        })
      }
        
      </article> 
       <footer className="lablec">
        <p>Berényi Péter</p>
       </footer>
    </div>
  );
}



export default App;
