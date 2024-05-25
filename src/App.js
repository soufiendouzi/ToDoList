import './App.css';
import AddItems from './Component/AddItems';
import ListItems from './Component/ListItems';
import { useState } from 'react';
function App() {

  const [list,setList] = useState(["item1","item2"])
  const addItem = (item) => {
    setList ([item , ...list])
  } 
  const deleteItem =(index) => {
    setList(list.filter( (el,i) => i !== index )) 
  }


  return (
    <div className="App">
     <AddItems addItem={addItem}  />
     <ListItems  list={list} deleteItem={deleteItem} /> 
    </div>
  );
}

export default App;
