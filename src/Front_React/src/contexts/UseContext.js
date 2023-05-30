import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {

    const [signed, setSigned] = useState(false);
    const [senha, setSenha] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [codigo, setCodigo] = useState('');
    const [cnpj, setCNPJ] = useState('');
    const [DescricaoDaCamp, setDescricaoDacamp] = useState('');
    const [idCampanha, setIdCampanha] = useState('');
    const [NomeDaCampanha, setNomeDaCampanha] = useState('');
    const [nomeDaOng, setnomeDaOng] = useState('');
    const [gastos, setGastos] = useState([]);
    const [gastos2, setGastos2] = useState([]);
    const [idCampanha2, setIdCampanha2] = useState('');
    const [valor, SetValor] = useState('');
    const [Camp, SetCamp] = useState([]);
    const [Tipo, setTipoDoacao] = useState('');
    const [idCodigo, setCodigo2] = useState([]);
    const [acceptTerm, setAcceptTerm] = useState(false)
    const [gastos3, setGastos3] = useState([]);
    const [loading2, setloading2] = useState(false)
    

    return (

        <UserContext.Provider
            value={{
                signed,
                setSigned,
                nomeDaOng,
                setnomeDaOng,
                nomeFantasia,
                setNomeFantasia,
                NomeDaCampanha,
                setNomeDaCampanha,
                idCampanha,
                setIdCampanha,
                setDescricaoDacamp,
                DescricaoDaCamp,
                codigo,
                setCodigo,
                cnpj,
                setCNPJ,
                senha,
                setSenha,
                gastos,
                setGastos,
                gastos2,
                setGastos2,
                setIdCampanha2,
                idCampanha2,
                valor,
                SetValor,
                Camp,
                SetCamp,
                Tipo,
                setTipoDoacao,
                idCodigo,
                setCodigo2,
                acceptTerm, 
                setAcceptTerm,
                gastos3,
                setGastos3,
                loading2,
                setloading2
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext);

    const { idCodigo, setCodigo2, setTipoDoacao, Tipo, SetCamp, Camp, valor, SetValor, signed, setSigned, nomeDaOng, setnomeDaOng, nomeFantasia, setNomeFantasia, NomeDaCampanha, setNomeDaCampanha, idCampanha, setIdCampanha, DescricaoDaCamp, setDescricaoDacamp, codigo, setCodigo, cnpj, setCNPJ, senha, setSenha, gastos, setGastos, gastos2, setGastos2, idCampanha2, setIdCampanha2, acceptTerm, setAcceptTerm,gastos3,setGastos3,loading2,setloading2} = context;

    return { idCodigo, setCodigo2, setTipoDoacao, Tipo, SetCamp, Camp, valor, SetValor, signed, setSigned, nomeDaOng, setnomeDaOng, nomeFantasia, setNomeFantasia, NomeDaCampanha, setNomeDaCampanha, idCampanha, setIdCampanha, DescricaoDaCamp, setDescricaoDacamp, codigo, setCodigo, cnpj, setCNPJ, senha, setSenha, gastos, setGastos, gastos2, setGastos2, idCampanha2, setIdCampanha2, acceptTerm, setAcceptTerm,gastos3,setGastos3,loading2,setloading2 };

}