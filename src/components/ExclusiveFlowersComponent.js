import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ExclusiveFlowersComponent = () => {
    const dispatch = useDispatch()
    const {exclusiveFlowers} = useSelector(state => state.todoReducer)
    const {buysList} = useSelector(state => state.basketReducer)
    function putLike(exclusiveFlower) {
        dispatch({type: "PUT_EX_LIKE", payload: exclusiveFlower});
        dispatch({type: "GET_FAVOURITE_FLOWERS", payload: exclusiveFlower});
      }
    
      function removeLike(exclusiveFlower) {
      dispatch({type: "REMOVE_EX_LIKE", payload: exclusiveFlower});
      }
    
      const exclusive = JSON.parse(localStorage.getItem('EXflowers'))
    function sendToBasket(exclusiveFlower){
        if (buysList.length > 0 && buysList.find((elem) => elem.id === exclusiveFlower.id)) {
            dispatch({ type: 'CHANGE', payload: exclusiveFlower });
          } else {
            dispatch({ type: 'BUYLIST', payload: exclusiveFlower });
          }
    }
    return (
        <div>
             {exclusive ? (
                <div className='catalogs_exclusive_container'>
                {exclusive.map((exclusiveFlower) => (
                  <div className="section3_cart" key={exclusiveFlower.id}>
                  <img src={exclusiveFlower.image} alt="" width='350'/>
                  <p className="section3_flower_name">{exclusiveFlower.name}</p>
                  <div className="section3_flex">
                    <p className="section3_price">${exclusiveFlower.price}</p>
                    <div className="section3_images">
                    {exclusiveFlower.liked ? (
                         <button
                           className="section3_btn"
                           onClick={() => removeLike(exclusiveFlower)}
                         >
                           <img src="./images/like.svg" alt=""/>
                         </button>
                       ) : (
                         <button
                           className="section3_btn"
                           onClick={() => putLike(exclusiveFlower)}
                         >
                           <img src="./images/heart.svg" alt=""/>
                         </button>
                       )}
                      <button  className="section3_btn" onClick={() => sendToBasket(exclusiveFlower)}>
                        <img src="./images/browncart.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
                ))}
                </div>
             ): (
                <div className='catalogs_exclusive_container'>
           {exclusiveFlowers.map((exclusiveFlower) => (
             <div className="section3_cart" key={exclusiveFlower.id}>
             <img src={exclusiveFlower.image} alt="" width='350'/>
             <p className="section3_flower_name">{exclusiveFlower.name}</p>
             <div className="section3_flex">
               <p className="section3_price">${exclusiveFlower.price}</p>
               <div className="section3_images">
               {exclusiveFlower.liked ? (
                    <button
                      className="section3_btn"
                      onClick={() => removeLike(exclusiveFlower)}
                    >
                      <img src="./images/like.svg" alt=""/>
                    </button>
                  ) : (
                    <button
                      className="section3_btn"
                      onClick={() => putLike(exclusiveFlower)}
                    >
                      <img src="./images/heart.svg" alt=""/>
                    </button>
                  )}
                 <button  className="section3_btn">
                   <img src="./images/browncart.svg" alt="" />
                 </button>
               </div>
             </div>
           </div>
           ))}
           </div>
             )}
        </div>
    );
};

export default ExclusiveFlowersComponent;