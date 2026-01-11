import React, { useEffect, useState } from 'react';

const FavouritiesComponent = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetch('/api/favourites')
      .then(res => {
        if (!res.ok) throw new Error('Ошибка загрузки фаворитов');
        return res.json();
      })
      .then(data => {
        if (!Array.isArray(data)) setFavourites([]);
        else setFavourites(data);
      })
      .catch(err => {
        setFavourites([]);
        alert('Ошибка загрузки фаворитов: ' + err.message);
      });
  }, []);

  async function deleteFlower(item) {
    try {
      const res = await fetch(`/api/favourites/${item.id}`, {
        method: 'DELETE'
      });
      if (!res.ok) throw new Error('Ошибка удаления');
      // После успешного удаления обновляем список
      setFavourites(favourites.filter(f => f.id !== item.id));
    } catch (err) {
      alert('Ошибка удаления товара: ' + err.message);
    }
  }

  function addToBasket(item) {
    fetch('/api/basket', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
      .then(res => res.json())
      .then(data => {
        alert('Товар добавлен в корзину!');
      });
  }

  return (
    <div className='favourite_container'>
      {Array.isArray(favourites) && favourites.length > 0 ? (
        favourites.map((item) => (
          <div className="section3_cart" key={item.id}>
            <img src={item.image} alt="" width="350" />
            <p className="section3_flower_name">{item.name}</p>
            <div className="section3_flex">
              <p className="section3_price">${item.price}</p>
              <div className="section3_images">
                <button
                  className="section3_btn"
                  onClick={() => deleteFlower(item)}
                >
                  <img src="./images/rubbish.png" alt="" width={40} />
                </button>
                <button
                  className="section3_btn"
                  onClick={() => addToBasket(item)}
                >
                  <img src="./images/browncart.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div style={{textAlign: 'center', marginTop: '40px', color: '#888'}}>Нет избранных товаров</div>
      )}
    </div>
  );
};

export default FavouritiesComponent;