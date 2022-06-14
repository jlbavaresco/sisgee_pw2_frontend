import { useContext } from 'react';
import PredioContext from './PredioContext';
import Alerta from '../../Alerta';

function Tabela() {

    const { alerta, listaObjetos, remover } = useContext(PredioContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Prédios</h1>
            <Alerta alerta={alerta} />
            {listaObjetos.length === 0 && <h2>Nenhum registro encontrado</h2>}
            {listaObjetos.length > 0 && (
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" style={{ textAlign: 'center' }}>Ações</th>
                                <th scope="col" width="17%">Código</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Sigla</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaObjetos.map(objeto => (
                                <tr key={objeto.codigo}>
                                    <td align="center">
                                        <button className="btn btn-danger" title="Remover"
                                            onClick={() => { remover(objeto); }}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                    <td>{objeto.codigo}</td>
                                    <td>{objeto.nome}</td>
                                    <td>{objeto.descricao}</td>
                                    <td>{objeto.sigla}</td>
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