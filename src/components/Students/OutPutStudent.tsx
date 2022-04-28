import { Logout } from "../LogIn/Logout"
import { Menu } from "../Menu/Menu"
import { Student } from "./Student"

export const OutPutStudent = () =>{
    return(
        <>
            <Menu/>
            <Logout/>
            <Student/>
        </>
    )
}