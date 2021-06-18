import React , {useState} from 'react';

const ItemMeno = (Item) => {
    // console.log(Item);
    return(
        <div>
            <h1>{Item.Item.nameItem}</h1>
            <p>Brew with {Item.Item.temp} water {Number(Item.Item.time) * 60} s</p>
        </div>
    )
}
export default ItemMeno;