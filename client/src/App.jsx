import React, { useState, useEffect, createContext } from 'react';
import InputForm from './components/InputForm.jsx';
import ItemList from './components/ItemList.jsx';
import axios from 'axios';

const ItemListContext = createContext();

function App() {

    App.ItemListContext = ItemListContext;

    let [fullItemList, setItemList] = useState([]);

    useEffect(() => {
        getFullList();
    }, []);

    function getFullList() {
        axios.get("/items")
        .then(response => {
            setItemList(response.data);
        })
        .catch(err => {
            console.log('Error recevied at getFullList in App component');
        })
    }

    console.log('fullItemList: ', fullItemList);

    return (
        <div>
            <h1>To Do List (Hooks Version)</h1>
            <InputForm />
            <ItemListContext.Provider value={fullItemList} >
                <ItemList />
            </ItemListContext.Provider>
        </div>
    )
}

export default App;