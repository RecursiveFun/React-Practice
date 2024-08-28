import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
const [search, setSearch] = useState('');
const [newItem, setNewItem] = useState('');

const SetAndSaveItems = (newItems) => {
  setItems(newItems);
  localStorage.setItem('shoppinglist', JSON.stringify(newItems));
};

const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
  SetAndSaveItems(listItems);
};

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id);
  SetAndSaveItems(listItems);
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (!newItem) return;
  addItem(newItem);
  setNewItem('');
};

const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id, checked: false, item};
  const listItems = [...items, myNewItem];
  SetAndSaveItems(listItems);
};

  return (
    
    <div className="App">
      <Header />
      <AddItem 
        handleSubmit = {handleSubmit}
        newItem = {newItem}
        setNewItem = {setNewItem}
      />
            <SearchItem
        search = {search}
        setSearch = {setSearch}
      />
      <Content
      items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      setItems = {setItems}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />
      <Footer
      length = {items.length}
       />
    </div>
  );
};

export default App;
