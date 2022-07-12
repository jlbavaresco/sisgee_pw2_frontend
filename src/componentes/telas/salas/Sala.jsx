import { useState, useEffect } from "react";
import Form from "./Form";
import SalaContext from "./SalaContext";
import Tabela from "./Tabela";
import WithAuth from "../../seg/WithAuth";
import Autenticacao from "../../seg/Autenticacao";
import { useNavigate } from 'react-router-dom';

function Predio() {

    let navigate = useNavigate();

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({
        codigo: "", numero: "",
        descricao: "", capacidade: "", predio: ""
    });
    const [listaPredios, setListaPredios] = useState([]);

    const recuperar = async codigo => {
        try {
            await fetch(`${process.env.REACT_APP_ENDERECO_API}/salas/${codigo}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "x-access-token": Autenticacao.pegaAutenticacao().token
                    }
                })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Erro código: ' + response.status)
                })
                .then(data => setObjeto(data))
        } catch (err) {
            console.log(err);
            window.location.reload();
            navigate("/login", { replace: true });
        }
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        const metodo = editar ? "PUT" : "POST";
        try {
            await fetch(`${process.env.REACT_APP_ENDERECO_API}/salas`, {
                method: metodo,
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": Autenticacao.pegaAutenticacao().token
                },
                body: JSON.stringify(objeto),
            }).then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Erro código: ' + response.status)
            })
                .then(json => {
                    setAlerta({ status: json.status, message: json.message });
                    if (json.status === "success") {
                        setObjeto(json.objeto);
                        if (!editar) {
                            setEditar(true);
                        }
                    }
                });
        } catch (err) {
            console.log(err);
            window.location.reload();
            navigate("/login", { replace: true });
        }
        recuperaSalas();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const recuperaPredios = async () => {
        try {
            await fetch(`${process.env.REACT_APP_ENDERECO_API}/predios`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "x-access-token": Autenticacao.pegaAutenticacao().token
                    }
                })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Erro código: ' + response.status)
                })
                .then(data => setListaPredios(data))
        } catch (err) {
            console.log(err);
            window.location.reload();
            navigate("/login", { replace: true });
        }
    }

    const recuperaSalas = async () => {
        try {
            await fetch(`${process.env.REACT_APP_ENDERECO_API}/salas`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "x-access-token": Autenticacao.pegaAutenticacao().token
                    }
                })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Erro código: ' + response.status)
                })
                .then(data => setListaObjetos(data))
        } catch (err) {
            console.log(err);
            window.location.reload();
            navigate("/login", { replace: true });
        }
    }

    const remover = async objeto => {
        if (window.confirm('Deseja remover este objeto?')) {
            try {
                await
                    fetch(`${process.env.REACT_APP_ENDERECO_API}/salas/${objeto.codigo}`,
                        {
                            method: "DELETE",
                            "x-access-token": Autenticacao.pegaAutenticacao().token
                        })
                        .then(response => response.json())
                        .then(json => setAlerta({ status: json.status, message: json.message }))
                recuperaSalas();
            } catch (err) {
                console.log(err);
                window.location.reload();
                navigate("/login", { replace: true });
            }
        }
    }

    useEffect(() => {
        recuperaSalas();
        recuperaPredios();
    }, []);

    return (
        <SalaContext.Provider
            value={{
                alerta, setAlerta, listaObjetos, setListaObjetos,
                recuperaPredios, remover, objeto, setObjeto,
                editar, setEditar,
                recuperar, acaoCadastrar, handleChange, listaPredios
            }}>
            <Tabela />
            <Form />
        </SalaContext.Provider>
    )

}

export default WithAuth(Predio);