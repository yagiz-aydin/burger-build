import React from 'react';

function TotalPrice(props) {
    var TotalPayment = 0
    return (
        <div className="payments">{ 
            props.selectedIngredients.forEach((item) => {
            TotalPayment += item.price;
            })
        }
        Total Price : {TotalPayment}
        </div>
    );
    
}

export default TotalPrice;
