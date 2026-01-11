import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementQuantity, encrementQuantity } from '../../store/basketReducer';
import './BasketItemComponent.css'
const BasketItemComponent = ({item}) => {
    const dispatch = useDispatch()
    function decrement(item) {
        dispatch(decrementQuantity(item.id));
      }
      function encrement(item) {
        dispatch(encrementQuantity(item.id));
      }
    return item.quantity ? (
        <li className="basket__list-item">
          <p className="basket__list-item-title">{item.name}</p>
          <h4 className="basket__list-item-price">{item.price}$</h4>
          <button
           onClick={() => encrement(item)}
            className="basket__list-item-enc">
            -
          </button>
          <p className="basket__list-item-quantity">{item.quantity}</p>
          <button className="basket__list_plus"
           onClick={() => decrement(item)}
           >+</button>
        </li>
      ) : (
        ''
      );
};

export default BasketItemComponent;