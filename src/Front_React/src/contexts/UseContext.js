import React, { createContext, useContext, useState } from 'react';


// @ts-ignore
export const UserContext = createContext();

export default function UserProvider({ children }) {

    const [signed, setSigned] = useState(false);

    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [pais, setPais] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [fundacao, setFundacao] = useState('');
    const [estado, setEstado] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [codigo, setCodigo] = useState('');
    const [cnpj, setCNPJ] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCEP] = useState('');
    //const [CadastroCampanhas, setCadastroCampanhas] = useState([]);
    const [cartaoDeCredito, setCartaoDeCredito] = useState('');
    const[cidade2, setCidade2]=useState('');
    const[DescricaoDaCamp,setDescricaoDacamp]=useState('');
    const [email2, setEmail2] = useState('');
    const [endereco2, setEndereco2] = useState('');
    const [estado2, setEstado2] = useState('');
    const [idCampanha, setIdCampanha] = useState('');
    const [NomeDaCampanha,setNomeDaCampanha] = useState('');
    const [nomeDaOng, setnomeDaOng] = useState('');
    const [pais2, setPais2] = useState('');
    const [pix,setPix]= useState('');
    const [receberFisico, setReceberFisico]= useState('');
    const [telefone2, setTelefone2] = useState('');
    const [gastos, setGastos] =useState([]);
    const [gastos2, setGastos2] =useState([]);
    const [idCampanha2, setIdCampanha2] = useState('');

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
                idCampanha2
            
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext);

    const { signed, setSigned, nomeDaOng, setnomeDaOng, nomeFantasia, setNomeFantasia, NomeDaCampanha, setNomeDaCampanha, idCampanha, setIdCampanha, DescricaoDaCamp,setDescricaoDacamp,codigo,setCodigo,cnpj,setCNPJ,senha,setSenha, gastos,setGastos,gastos2,setGastos2,idCampanha2,setIdCampanha2} = context;

    return { signed, setSigned, nomeDaOng, setnomeDaOng, nomeFantasia, setNomeFantasia, NomeDaCampanha, setNomeDaCampanha, idCampanha, setIdCampanha,DescricaoDaCamp,setDescricaoDacamp,codigo,setCodigo,cnpj,setCNPJ,senha,setSenha, gastos,setGastos,gastos2,setGastos2,idCampanha2,setIdCampanha2};
}