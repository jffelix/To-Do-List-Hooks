import React, { useState, useContext } from 'react';
import ItemList from '../components/ItemList.jsx';
import App from '../App.jsx';
import axios from 'axios';

function ItemListEntry(props) {
    // const contextListEntry = useContext(ItemList.contextList);
    let [toggleUpdate, setToggleUpdate] = useState(false);
    const [updateInputName, setUpdateInputName] = useState("");
    const [updateInputQuantity, setUpdateInputQuantity] = useState("");

    function clickUpdate() {
        setToggleUpdate(prevState => !prevState);
        // console.log('toggleUpdate: ', toggleUpdate);
    }

    function UpdateItem(event) {
        var selectedItemId = props.item.id;
        // console.log('selectedItemId: ', selectedItemId);
        var updateObj = {};

        updateObj.name = updateInputName;
        updateObj.quantity = updateInputQuantity;

        console.log('updateObj: ', updateObj);

        clickUpdate();
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

    if (!toggleUpdate) {

        return (
            <div>
                <p>{props.item.name}</p>
                <p>{props.item.quantity}</p>
                <button onClick={(event) => clickUpdate(event)}>Update Item</button>
                <button onClick={(event) => DeleteItem(event)}>Delete Item</button>
                <p>________________________________________</p>
            </div>
        )

    } else {

        return (
            <div>
                <input value={updateInputName} onChange={(event) => setUpdateInputName(event.target.value)} />
                <input value={updateInputQuantity} onChange={(event) => setUpdateInputQuantity(event.target.value)} />
                <p> </p>
                <button onClick={(event) => UpdateItem(event)}>Submit Update</button>
                <p> </p>
                <button onClick={(event) => clickUpdate(event)}>Cancel</button>
                <p>________________________________________</p>
            </div>
        )

    }

}

export default ItemListEntry;