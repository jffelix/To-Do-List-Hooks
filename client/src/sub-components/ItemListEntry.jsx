import React, { useContext } from 'react';
import ItemList from '../components/ItemList.jsx';
import App from '../App.jsx';
import axios from 'axios';

function ItemListEntry(props) {
    // const contextListEntry = useContext(ItemList.contextList);

    function UpdateItem(event) {
        var selectedItemId = props.item.id;
        console.log('selectedItemId: ', selectedItemId);
    }

    function DeleteItem(event) {
        var selectedItemId = props.item.id;

        axios.delete(`/items/${selectedItemId}`)
        .then(() => {
            App.getFullList();
            console.log('Successfully connected with Axios DELETE request!');
        })
        .catch((err) => {
            console.log('Error received during Axios DELETE request.')
        })
    }

    return (
        <div>
            <p>{props.item.name}</p>
            <p>{props.item.quantity}</p>
            <button onClick={(event) => UpdateItem(event)}>Update Item</button>
            <button onClick={(event) => DeleteItem(event)}>Delete Item</button>
            <p>________________________________________</p>
        </div>
    )

}

export default ItemListEntry;