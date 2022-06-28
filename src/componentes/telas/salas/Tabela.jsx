import { useContext } from 'react';
import SalaContext from './SalaContext';
import Alerta from '../../Alerta';

function Tabela() {

    const { alerta, listaObjetos, remover, setEditar, recuperar, setObjeto, setAlerta } = useContext(SalaContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Prédios</h1>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEdicao"
                onClick={() => {
                    setObjeto({ codigo: "", numero: "",
                     descricao: "", capacidade: "", predio : "" });
                    setEditar(false);
                    setAlerta({ status: "", message: "" });
                }}>
                Novo
            </button>            
            <Alerta alerta={alerta} />
            {listaObjetos.length === 0 && <h2>Nenhum registro encontrado</h2>}
            {listaObjetos.length > 0 && (
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" style={{ textAlign: 'center' }}>Ações</th>
                                <th scope="col" width="17%">Código</th>
                                <th scope="col">Numero</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Capacidade</th>
                                <th scope="col">Prédio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaObjetos.map(objeto => (
                                <tr key={objeto.codigo}>
                                    <td align="center">
                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#modalEdicao"
                                            onClick={() => {
                                                recuperar(objeto.codigo);
                                                setEditar(true);
                                                setAlerta({ status: "", message: "" });
                                            }}>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>                                        
                                        <button className="btn btn-danger" title="Remover"
                                            onClick={() => { remover(objeto); }}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                    <td>{objeto.codigo}</td>
                                    <td>{objeto.numero}</td>
                                    <td>{objeto.descricao}</td>
                                    <td>{objeto.capacidade}</td>
                                    <td>{objeto.nomepredio}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default Tabela;