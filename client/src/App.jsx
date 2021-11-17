import React, { useState, useEffect } from 'react';
import InputForm from './components/InputForm.jsx';
import axios from 'axios';

function App() {

    const [itemList, setItemList] = useState([]);

    function getFullList() {
    
        axios.get("/items")
        .then(response => {

            // itemList = response.data;
            console.log('itemList: ', itemList);
        })
        .catch(err => {
            console.log('Error recevied at getFullList in App component');
        })
    }

    useEffect(() => {
        getFullList();
    })

    return (
        <div>
            <h1>To Do List (Hooks Version)</h1>
            <InputForm />
        </div>
    )
}

export default App;