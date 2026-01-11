import React from "react";
import {useDispatch, useSelector} from "react-redux";

const SeasonFlowersComponent = () => {
  const dispatch = useDispatch();
  const {seasonFlowers} = useSelector((state) => state.todoReducer);
const {buysList} = useSelector(state => state.basketReducer)
  function putLike(seasonFlower) {
    dispatch({type: "PUT_LIKE", payload: seasonFlower});
    dispatch({type: "GET_FAVOURITE_FLOWERS", payload: seasonFlower});
  }

  function removeLike(seasonFlower) {
    dispatch({type: "REMOVE_LIKE", payload: seasonFlower});
  }

  const season = JSON.parse(localStorage.getItem('flowers'))

  function sendToBasked(seasonFlower){
    if (buysList.length > 0 && buysList.find((elem) => elem.id === seasonFlower.id)) {
      dispatch({ type: 'CHANGE', payload: seasonFlower });
    } else {
      dispatch({ type: 'BUYLIST', payload: seasonFlower });
    }
  }
  return (
    <>
      {season ? (
          season.map((seasonFlower, i) => (
            <div className="section3_cart" key={i}>
              <img src={seasonFlower.image} alt="" width="350"/>
              <p className="section3_flower_name">{seasonFlower.name}</p>
              <div className="section3_flex">
                <p className="section3_price">${seasonFlower.price}</p>
                <div className="section3_images">
                  {seasonFlower.liked ? (
                    <button
                      className="section3_btn"
                      onClick={() => removeLike(seasonFlower)}
                    >
                      <img src="./images/like.svg" alt=""/>
                    </button>
                  ) : (
                    <button
                      className="section3_btn"
                      onClick={() => putLike(seasonFlower)}
                    >
                      <img src="./images/heart.svg" alt=""/>
                    </button>
                  )}
                  <button className="section3_btn" onClick={() => sendToBasked(seasonFlower)}>
                    <img src="./images/browncart.svg" alt=""/>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) :
        (
          seasonFlowers.map((seasonFlower, i) => (
            <div className="section3_cart" key={i}>
              <img src={seasonFlower.image} alt="" width="350"/>
              <p className="section3_flower_name">{seasonFlower.name}</p>
              <div className="section3_flex">
                <p className="section3_price">${seasonFlower.price}</p>
                <div className="section3_images">
                  {seasonFlower.liked ? (
                    <button
                      className="section3_btn"
                      onClick={() => removeLike(seasonFlower)}
                    >
                      <img src="./images/like.svg" alt=""/>
                    </button>
                  ) : (
                    <button
                      className="section3_btn"
                      onClick={() => putLike(seasonFlower)}
                    >
                      <img src="./images/heart.svg" alt=""/>
                    </button>
                  )}
                  <button className="section3_btn">
                    <img src="./images/browncart.svg" alt=""/>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
    </>
  );
};

export default SeasonFlowersComponent;
