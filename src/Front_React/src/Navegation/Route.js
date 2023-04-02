import React from "react";

import {useUser} from '../contexts/UseContext';
import Main from '../Navegation/Main';
import Auth from '../Navegation/Auth';
import Main2 from "./Main2";

const Route = () =>{

    const {signed} = useUser();

    return (

        <>
        {
            signed
            ?<Main2/>
            :<Main/>
        }

        </>
    )



}

export default Route;

