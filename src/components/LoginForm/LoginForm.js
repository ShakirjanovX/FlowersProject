import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeIsShowAction, getUserAction } from "../../store/todoReducer";
// import { addToDoAction } from "../store/todoReducer";
import './LoginForm.css'
const LoginForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", email: "",phone:"", addres:'' });
  
  function addUser() {
    if(form.name !== '' && form.email !== '' && form.phone !== ''&& form.addres !== ''  ){
      const new_user = {
        id: Date.now(),
        name: form.name,
        email: form.email,
        phone: form.phone,
        addres: form.addres
      };
      dispatch({ type: 'IS_PROFIL', payload: true })
      dispatch(getUserAction(new_user));
      dispatch(changeIsShowAction(false))
    }else{
      alert('у вас не заполнена все')
    }
   
  }
  
  function closeModal(){
    dispatch(changeIsShowAction(false))
  }

  return (
    <div className="login_container" onClick={closeModal}>
      <div className="form-card" onClick={e => e.stopPropagation()}>
        <h1 className="login_title">Login up to your personal accaount!</h1>

      <input
      className="login_input"
        type="text"
        placeholder="Name..."
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
       className="login_input"
        type="email"
        placeholder="Email..."
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
       <input
        className="login_input"
        type="number"
        placeholder="Phone..."
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
       <input
        className="login_input"
        type="text"
        placeholder="Addres..."
        value={form.addres}
        onChange={(e) => setForm({ ...form, addres: e.target.value })}
      />
      <button onClick={addUser} className="signUp">Sign up</button>
    </div>
    </div>
  );
};

export default LoginForm;
