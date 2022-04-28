import  '../../assets/Css/MenuCss/LeaderMenu.css';

import CompSymbol from '../../assets/image/Logo.svg';

import {AiOutlineEye, AiOutlineLineChart, AiOutlineSetting} from 'react-icons/ai';
import {BsPeople,BsBriefcase, BsBook} from 'react-icons/bs';


import { SuppLeaderMenu } from './SuppLeaderMenu';

export const LeaderMenu = () =>{
    return(
        <div className='LeaderMenu'>
            <div style={{backgroundImage: `url(${CompSymbol})`, height: '40px', width: '70px', backgroundSize: '100% 100%', marginTop: '50px', marginLeft: '8px'}}/>
        
            {/* menu Chính */}
            <ul className='ulMainMenuLeader'>
                <li className='liMainMenuLeader'><AiOutlineEye/></li>
                <li className='liMainMenuLeader'><AiOutlineLineChart/></li>
                <li className='liMainMenuLeader'><BsPeople/></li>
                <li className='liMainMenuLeader'><BsBriefcase/></li>
                <li className='liMainMenuLeader'><BsBook/></li>
                <li className='liMainMenuLeader'><AiOutlineSetting/></li>
            </ul>  

            {/* Menu phụ */}  
            <SuppLeaderMenu/>

        </div>
    )
}