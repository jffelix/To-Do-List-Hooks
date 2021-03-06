import React, { useState, useContext } from 'react';
import ItemList from '../components/ItemList.jsx';
import App from '../App.jsx';
import axios from 'axios';

import '../../public/styles.css';

function ItemListEntry(props) {
    let [toggleUpdate, setToggleUpdate] = useState(false);
    const [updateInputName, setUpdateInputName] = useState("");
    const [updateInputQuantity, setUpdateInputQuantity] = useState("");

    function clickUpdate() {
        setToggleUpdate(prevState => !prevState);
    }

    function UpdateItem(event) {
        var selectedItemId = props.item.id;
        var updateObj = {};

        updateObj.id = selectedItemId;
        updateObj.name = updateInputName;
        updateObj.quantity = updateInputQuantity;
        // console.log('updateObj: ', updateObj);
        axios.put(`/items/${selectedItemId}`, updateObj)
        .then(() => {
            App.getFullList();
            console.log('Successfully connected with Axios PUT request!');
        })
        .catch(err => {
            console.log('Error received during Axios PUT request')
        })

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
            <div className="itemEntry">
                <div className="itemEntryP">
                    <div className="name">
                        <p>{props.item.name}</p>
                    </div>
                    <div className="quantity">
                        <p>{props.item.quantity}</p>
                    </div>
                </div>
                <div className="buttons">
                    <div className="updateItem">
                        <button onClick={(event) => clickUpdate(event)}>Update Entry</button>
                    </div>
                    <div className="deleteItem">
                        <button onClick={(event) => DeleteItem(event)}>Delete Entry</button>
                    </div>
                </div>
            </div>
        )

    } else {

        return (
            <div className="itemEntry">
                <div className="inputFields">
                    <div className="changeItem">
                        <input value={updateInputName} onChange={(event) => setUpdateInputName(event.target.value)} placeholder="name"/>
                    </div>
                    <div className="changeQuantity">
                        <input value={updateInputQuantity} onChange={(event) => setUpdateInputQuantity(event.target.value)} placeholder="quantity"/>
                    </div>
                </div>
                <div className="inputButtons">
                    <div className="submitUpdate">
                        <button onClick={(event) => UpdateItem(event)}>Submit Update</button>
                    </div>
                    <div className="cancel">
                        <button onClick={(event) => clickUpdate(event)}>Cancel</button>
                    </div>
                </div>
            </div>
        )

    }

}

export default ItemListEntry;