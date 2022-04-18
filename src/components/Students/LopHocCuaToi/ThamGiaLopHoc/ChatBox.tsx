import React, {useState} from 'react';

import { OpenChatBox } from './Chat/OpenChatBox';
import { CloseChatBox } from './Chat/CloseChatBox';

 export const ChatBox = () =>{

    const [openChat,setOpenChat] = useState (<CloseChatBox/>);

    const openChatBox = () =>{
        if(openChat===<CloseChatBox/>){
            setOpenChat(<OpenChatBox/>)
        }else{
            setOpenChat(<CloseChatBox/>)
        }
    }

    return (
        <>

        {openChat}

        </>
    )
}
