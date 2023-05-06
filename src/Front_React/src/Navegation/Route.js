import React from "react";
import { useUser } from '../contexts/UseContext';
import Main from '../Navegation/Main';
import Autenticado from "./Autenticado";

const Route = () => {

    const { signed } = useUser();

    return (
        <>
            {
                signed
                    ? <Autenticado />
                    : <Main />
            }
        </>
    )
}
export default Route;

