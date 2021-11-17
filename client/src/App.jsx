import React, { useState, useEffect, createContext } from 'react';
import InputForm from './components/InputForm.jsx';
import ItemList from './components/ItemList.jsx';
import axios from 'axios';

export const UserContext = createContext();

function App() {

    const [fullItemList, setItemList] = useState([]);

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
            <ItemList fullItemList={fullItemList} />
        </div>
    )
}

export default App;