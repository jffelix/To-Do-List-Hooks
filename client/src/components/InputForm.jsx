import React from 'react';

function InputForm(event) {

    function logTest(event) {
        event.preventDefault();

        console.log('You clicked submit!');
    }

    return (
        <div>
            <form onSubmit={(event) => logTest(event)}>
                <h4>Item</h4>
                <input name="itemName" />
                <h4>Quantity</h4>
                <input name="itemQuantity" />
                <p> </p>
                <button>Submit Item</button>
            </form>
        </div>
    )
}

export default InputForm;