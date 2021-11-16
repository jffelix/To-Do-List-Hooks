import React from 'react';

function InputForm() {
    return (
        <div>
            <form>
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