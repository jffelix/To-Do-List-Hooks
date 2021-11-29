import React, { useState, useEffect, createContext } from 'react';
import InputForm from './components/InputForm.jsx';
import ItemList from './components/ItemList.jsx';
import axios from 'axios';

import '../public/styles.css';

const ItemListContext = createContext();

function App() {

    App.ItemListContext = ItemListContext;
    App.addNewItem = addNewItem;
    App.getFullList = getFullList;

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

    function addNewItem(newItem) {
        // var newItem = InputForm.itemObjPush;
        console.log('newItem: ', newItem);

        axios.post("/items", newItem)
        .then(response => {
            // console.log('response.data: ', response.data);
            setItemList(prevArray => [...prevArray, InputForm.itemObjPush]);
        }, () => {
            getFullList();
        })
        .catch(err => {
            console.log('Error received during Axios POST request: ', err);
        })
    }

    console.log('fullItemList: ', fullItemList);

    return (
        <div className="main">
            <div className="titleInput">
                <div className="title">
                    <h1>To Do List (Hooks Version)</h1>
                </div>
                <div className="inputForm">
                    <InputForm />
                </div>
            </div>
            <div className="itemList">
                <ItemListContext.Provider value={fullItemList} >
                    <ItemList />
                </ItemListContext.Provider>
            </div>
        </div>
    )
}

export default App;