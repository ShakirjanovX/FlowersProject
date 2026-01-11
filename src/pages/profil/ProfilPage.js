import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavouritiesComponent from '../../components/favourities/FavouritiesComponent';
import FooterComponent from '../../components/footer/FooterComponent';
import Header from '../../components/header/Header';
import './ProfilPage.css'

const ProfilPage = () => {
    const {isChoose} = useSelector(state => state.todoReducer)
    const dispatch = useDispatch()
   function openMyAccaunt(){
    dispatch({type:'CHANGE_IS_SHOOSE',payload: false})
   }
   function openFavourites(){
    dispatch({type:'CHANGE_IS_SHOOSE',payload: true})
   }
    return (
        <div>
            <Header/>
            <div className='prrofil_container'>
                <ul className='profil_ul'>
                    <li className={isChoose? '' :'active'} onClick={openMyAccaunt}>My Accaunt</li>
                    <li className={isChoose ? 'active':''} onClick={openFavourites}>Favourites</li>
                </ul>
                {isChoose ? (
                      <div className='profil_cart'>
                          <FavouritiesComponent/>
                      </div>
                ) : (
                    <div className='profil_cart'>
                           <img src="./images/img_56.png" alt="" width={160} className="profile_img"/>
                           <div className='pfofil_user'>
                               <div className='list_of_profil'>
                               <p>Name</p>
                               <p>Email</p>
                               <p>Phone number</p>
                               <p>Addres</p>
                               </div>
                               <div className='list_of_names'>
                                   <div className='list_of_input'>
                                       <p>{JSON.parse(localStorage.getItem('user')).name}</p>
                                   </div>
                                   <div className='list_of_input'>
                                       <p>{JSON.parse(localStorage.getItem('user')).email}</p>
                                   </div>
                                   <div className='list_of_input'>
                                       <p>{JSON.parse(localStorage.getItem('user')).phone}</p>
                                   </div>
                                   <div className='list_of_input'>
                                       <p>{JSON.parse(localStorage.getItem('user')).addres}</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                )}
            </div>
            <FooterComponent/>
        </div>
    );
};

export default ProfilPage;