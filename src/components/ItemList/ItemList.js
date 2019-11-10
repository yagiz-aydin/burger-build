import React from 'react';
import {Item}  from "../../components";

function ItemList(props) {
    return (
        <div className="itemList">
            {
                props.items.map((item) => {
                    const icindeVarMi = props.selectedIngredients.find((ingredient) => {
                        return ingredient.name === item.name;
                    });
                    const icindeKacTane = props.selectedIngredients.filter((ingridient) => {
                        return ingridient.name === item.name;
                    });
                    return <Item key={item.id} {...item}
                                malzemeEkle={props.malzemeEkle}
                                malzemeCikar={props.malzemeCikar}
                                butonGoster={icindeVarMi}
                                adet={icindeKacTane}
                    />
                })
            }
        </div>
    );
}

export default ItemList;
