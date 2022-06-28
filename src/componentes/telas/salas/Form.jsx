import { useContext } from "react";
import Alerta from "../../Alerta";
import SalaContext from "./SalaContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import CampoSelect from "../../comuns/CampoSelect";
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
            <CampoSelect value={objeto.predio}
                id="txtPredio" name="predio" label="Prédio"
                onchange={handleChange}
                msgvalido="OK certo" msginvalido="Informe o prédio"
                requerido={true}>
                {listaPredios.map((pre) => (
                    <option key={pre.codigo} value={pre.codigo}>
                        {pre.nome}
                    </option>
                ))}
            </CampoSelect>
        </Dialogo>

    )
}

export default Form;