import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { routes } from "../routes/routes";
// import flowersJson from '../data/flowers.json'
import { getExclusiveFlowersAction, getFlowersAction } from "../store/todoReducer";
const AppRouter = () => {
 const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('flowers')) {
      dispatch(getFlowersAction(JSON.parse(localStorage.getItem('flowers'))))
    } else {
  // fetch('/api/seasonFlowers').then(res => res.json()).then(data => dispatch(getFlowersAction(data)))
    }
    if(localStorage.getItem('EXflowers')){
      dispatch(getExclusiveFlowersAction(JSON.parse(localStorage.getItem('EXflowers'))))
    }else{
  // fetch('/api/exclusiveFlowers').then(res => res.json()).then(data => dispatch(getExclusiveFlowersAction(data)))
    }
  }, [dispatch])
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route path={route.path} element={route.element} key={index} />
      ))}
    </Routes>
  );
};

export default AppRouter;
