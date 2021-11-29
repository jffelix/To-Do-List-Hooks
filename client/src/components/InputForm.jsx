import React, { useState, useEffect } from 'react';
import App from '../App.jsx';

function InputForm(event) {

    const [itemName, setItemName] = useState("");
    const [itemQuantity, setItemQuantity] = useState("");
    const [itemObjPush, setItemObjPush] = useState([]);

    InputForm.itemObjPush = itemObjPush;

    function handleInputSubmit(event) {
        // event.preventDefault();

        var itemObj = {};

        itemObj.name = itemName;
        itemObj.quantity = itemQuantity;

        setItemObjPush(itemObj);
        
        console.log('itemObj: ', itemObj);
        // console.log("itemObjPush: ", itemObjPush);
        App.addNewItem(itemObj);

        // need to clean out text from input tags after submitting
    }

    return (
        <div className="inputForm">
            <form onSubmit={(event) => handleInputSubmit(event)}>
                <div className="nameInput">
                    <h4>Item</h4>
                    <input name="itemName" value={itemName} onChange={(event) => setItemName(event.target.value)} />
                </div>
                <div className="quantityInput">
                    <h4>Quantity</h4>
                    <input name="itemQuantity" value={itemQuantity} onChange={(event) => setItemQuantity(event.target.value)} />
                </div>
                <div className="submitItem">
                    <button>Submit Item</button>
                </div>
            </form>
        </div>
    )
}

export default InputForm;