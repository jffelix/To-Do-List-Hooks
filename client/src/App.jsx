import React, { useState, useEffect } from 'react';
import InputForm from './components/InputForm.jsx';
import axios from 'axios';

function App() {

    const [itemList, setItemList] = useState([]);

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

    console.log('itemList: ', itemList);

    return (
        <div>
            <h1>To Do List (Hooks Version)</h1>
            <InputForm />
        </div>
    )
}

export default App;