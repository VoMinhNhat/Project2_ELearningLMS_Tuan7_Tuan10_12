import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

//import các trang ui
import { Dangnhap } from './components/LogIn/Dangnhap';
import { Menu } from './components/Menu/Menu';
import { Logout } from './components/LogIn/Logout';
import { TongQuat } from './components/Students/TongQuan/TongQuat';

function App() {
  return (
    <div style={{display: 'flex'}}>

      <Dangnhap/>

      <Menu/>

      <Logout/>

      <TongQuat/>

    </div>
  );
}

export default App;
