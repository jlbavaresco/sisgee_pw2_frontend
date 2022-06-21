import { useContext } from "react";
import Alerta from "../../Alerta";
import PredioContext from "./PredioContext";

function Form() {

    const { objeto, handleChange,
        acaoCadastrar, alerta } = useContext(PredioContext);

    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    })()

    return (
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edição de Prédios</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar}
                        className="needs-validation" noValidate>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="form-group">
                                <label htmlFor="txtID" className="form-label">
                                    Código
                                </label>
                                <input type="text"
                                    readOnly
                                    className="form-control"
                                    id="txtID"
                                    name="codigo"
                                    value={objeto.codigo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtNome" className="form-label">
                                    Nome
                                </label>
                                <input type="text"
                                    className="form-control"
                                    id="txtNome"
                                    name="nome"
                                    required
                                    maxLength="40"
                                    value={objeto.nome}
                                    onChange={handleChange}
                                />
                                <div className="valid-feedback">
                                    OK!
                                </div>
                                <div className="invalid-feedback">
                                    Informe o nome.
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtDescricao" className="form-label">
                                    Descrição
                                </label>
                                <input type="text"
                                    className="form-control"
                                    id="txtDescricao"
                                    name="descricao"
                                    maxLength="40"
                                    required
                                    value={objeto.descricao}
                                    onChange={handleChange}
                                />
                                <div className="valid-feedback">
                                    OK!
                                </div>
                                <div className="invalid-feedback">
                                    Informe a descrição.
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtSigla" className="form-label">
                                    Sigla
                                </label>
                                <input type="text"
                                    className="form-control"
                                    id="txtSigla"
                                    name="sigla"
                                    required
                                    maxLength="4"
                                    value={objeto.sigla}
                                    onChange={handleChange}
                                />
                                <div className="valid-feedback">
                                    OK!
                                </div>
                                <div className="invalid-feedback">
                                    Informe a sigla.
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success">Salvar
                                <i className="bi bi-save"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;