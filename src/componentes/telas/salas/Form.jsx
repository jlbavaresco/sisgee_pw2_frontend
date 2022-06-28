import { useContext } from "react";
import Alerta from "../../Alerta";
import SalaContext from "./SalaContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";

function Form() {

    const { objeto, handleChange,
        acaoCadastrar, alerta, listaPredios } = useContext(SalaContext);

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

        <Dialogo id="modalEdicao" idmodal="modalFormulario"
            labelmodal="Edição de Salas" idformulario="formulario"
            acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <CampoEntrada id="txtID"
                label="Código" tipo="number" readonly={true}
                requerido={false} name="codigo" value={objeto.codigo}
                onchange={handleChange}
                msgvalido="Campo informado corretamente"
                msginvalido="Valor inválido"
                maximocaracteres={5} />
            <CampoEntrada id="txtNumero"
                label="Número" tipo="number" readonly={false}
                requerido={true} name="numero" value={objeto.numero}
                onchange={handleChange}
                msgvalido="Campo informado corretamente"
                msginvalido="Valor inválido"
                maximocaracteres={10} />
            <CampoEntrada id="txtDescricao"
                label="Descrição" tipo="text" readonly={false}
                requerido={true} name="descricao"
                value={objeto.descricao}
                onchange={handleChange}
                msgvalido="Campo informado corretamente"
                msginvalido="Valor inválido"
                maximocaracteres={40} />
            <CampoEntrada id="txtCapacidade"
                label="Capacidade" tipo="number" readonly={false}
                requerido={true} name="capacidade"
                value={objeto.capacidade}
                onchange={handleChange}
                msgvalido="Campo informado corretamente"
                msginvalido="Valor inválido"
                maximocaracteres={4} />
            <div className="form-group">
                <label htmlFor="selectPredio" className="form-label">
                    Prédio
                </label>
                <select
                    required
                    className="form-control"
                    id="selectPredio"
                    name="predio"
                    value={objeto.predio}
                    onChange={handleChange}>
                    <option disabled="true" value="">
                        (Selecione o prédio)
                    </option>
                    {
                        listaPredios.map( (predio) => (
                            <option key={predio.codigo} 
                            value={predio.codigo}>
                                {predio.nome}
                            </option>
                        ))
                    }
                </select>
                <div className="valid-feedback">
                    Campo informado corretamente
                </div>
                <div className="invalid-feedback">
                    Selecione o prédio
                </div>
            </div>
        </Dialogo>

    )
}

export default Form;