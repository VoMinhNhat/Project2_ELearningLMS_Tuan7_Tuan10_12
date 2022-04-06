import React from "react";
import { Routes, Route} from 'react-router-dom';

import { ForgotPass } from "./LoginNForgot/ForgotPass";
import { Login } from "./LoginNForgot/Login";


export const Dangnhap = () =>{
    return(
        <Routes>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/ForgotPass' element={<ForgotPass/>}/>
        </Routes>
    )
}