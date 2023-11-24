import React from 'react';
import {Currency, propsFromList} from './dataTypes'
import { Level } from './level';


const currency: Currency = {
    CAD: 'C$',
    GBP: '£',
    EUR: '€',
    USD: '$'
}

export const Listing:React.FC<propsFromList> = ({ items }): React.ReactNode => {
    return (
        <div className="item-list">
            {items.map((obj) =>
                <div className="item" key={obj.listing_id}>
                    <div className="item-image">
                        <a href={obj.url}>
                            <img src={obj.MainImage}></img>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{obj.title.length > 50 ? obj.title.slice(0, 50) + '...' : obj.title}</p>
                        <p className="item-price">
                            {currency[obj.currency_code]}
                            {obj.price}
                        </p>
                        <Level qty={obj.quantity} />
                    </div>
                </div>)}
        </div>
    )
}