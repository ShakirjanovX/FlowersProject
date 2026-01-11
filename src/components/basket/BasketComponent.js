import React, { useEffect, useState } from 'react';
import BasketItemComponent from '../basketItem/BasketItemComponent';
import './BasketComponent.css';

const BasketComponent = ({ onClose }) => {
  const [basket, setBasket] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/basket')
      .then(res => {
        if (!res.ok) throw new Error('Ошибка загрузки корзины');
        return res.json();
      })
      .then(data => {
        setBasket(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setBasket([]);
        setLoading(false);
      });
  }, []);

  const total = () => {
    let result = 0;
    basket.forEach((element) => {
      result += element.price * (element.quantity || 1);
    });
    return result;
  };

  function buy() {
    if (basket.length) {
      let msg = `Вы заказали:\n`;
      basket.forEach((element) => {
        msg += `Букет: ${element.name} ${element.quantity || 1}, \n`;
      });
      msg += `На сумму ${total()}$`;
      alert(msg);
      setBasket([]);
      // Можно добавить очистку корзины через API
    } else {
      alert('Сначала добавьте букет в корзину');
    }
  }

  return (
    <div className='backet_container' onClick={onClose}>
      <div className="basket__content" onClick={e => e.stopPropagation()}>
        <div className="basket__content-item">
          <h1 className="basket__content-title">Корзина</h1>
          {loading ? (
            <div style={{textAlign:'center', margin:'30px'}}>Загрузка...</div>
          ) : error ? (
            <div style={{color:'red', textAlign:'center', margin:'30px'}}>Ошибка: {error}</div>
          ) : basket.length === 0 ? (
            <div style={{textAlign:'center', margin:'30px'}}>Корзина пуста</div>
          ) : (
            <ul className="basket__list">
              {basket.map((item) => (
                <BasketItemComponent key={item.id} item={item} />
              ))}
            </ul>
          )}
          <p className="total">{total()}$</p>
          <button className="btn buy__btn" onClick={buy}>
            Оформить заказ
          </button>
          <button className="btn close__btn" onClick={onClose}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketComponent;