import { useContext } from "react";
import Alerta from "../../Alerta";
import PredioContext from "./PredioContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";

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

        <Dialogo id="modalEdicao" idmodal="modalFormulario"
            labelmodal="Edição de prédios" idformulario="formulario"
            acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <CampoEntrada id="txtID"
                label="Código" tipo="number" readonly={true}
                requerido={false} name="codigo" value={objeto.codigo}
                onchange={handleChange}
                msgvalido="Campo informado corretamente"
                msginvalido="Valor inválido"
                maximocaracteres={5} />
            <CampoEntrada id="txtNome"
                label="Nome" tipo="text" readonly={false}
                requerido={true} name="nome" value={objeto.nome}
                onchange={handleChange}
                msgvalido="Campo informado corretamente"
                msginvalido="Valor inválido"
                maximocaracteres={40} />
            <CampoEntrada id="txtDescricao"
                label="Descrição" tipo="text" readonly={false}
                requerido={true} name="descricao"
                value={objeto.descricao}
                onchange={handleChange}
                msgvalido="Campo informado corretamente"
                msginvalido="Valor inválido"
                maximocaracteres={40} />
            <CampoEntrada id="txtSigla"
                label="Sigla" tipo="text" readonly={false}
                requerido={true} name="sigla"
                value={objeto.sigla}
                onchange={handleChange}
                msgvalido="Campo informado corretamente"
                msginvalido="Valor inválido"
                maximocaracteres={4} />
        </Dialogo>

    )
}

export default Form;