import React from 'react';
import {  useSelector } from 'react-redux';
import ExclusiveFlowersComponent from '../../components/ExclusiveFlowersComponent';
import FooterComponent from '../../components/footer/FooterComponent';
import Header from '../../components/header/Header';
import SeasonFlowersComponent from '../../components/SeasonFlowersComponent';
// import flowersJson from '../../data/flowers.json'
// import { getFlowersAction } from '../../store/todoReducer';
import './CatalogsPage.css'
const CatalogsPage = () => {


    return (
        <div>
            <Header/>
            <div className='catalogs_container'>
                <h1 className='catalog_title'>Popular choice</h1>
           <div className='catalogs_season_container'>
          <SeasonFlowersComponent/>
           </div>
           <h1 className='catalog_title title_h1'>Choose the bouquet of your dreams!</h1>
          <ExclusiveFlowersComponent/>
            </div>
            <FooterComponent/>
        </div>
    );
};

export default CatalogsPage;