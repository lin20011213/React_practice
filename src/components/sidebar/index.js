import React from 'react';
import logo from "../img/setting.png";
import './index.css';
const Sidebar = (props) => {
 
  return (
    <div className="sidebar">
      <h1>選單</h1>
      <button onClick={props.onClick}>
        <img src={logo} className="App-logo" alt="logo" width="100"/>
      </button>
      <button onClick={props.onClick}>
        <img src={logo} className="App-logo" alt="logo" width="100"/>
      </button>
      <button onClick={props.onClick} className='buttom_button'>
        <img src={logo} className="App-logo" alt="logo" />
      </button>
    </div>
  )
}

export default Sidebar