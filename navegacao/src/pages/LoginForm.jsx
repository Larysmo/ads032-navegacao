import { useRef, useState } from 'react'

export default function LoginForm(props) {
    const refEmail = useRef()
    const refSenha = useRef()
    const [erroEmail, setErroEmail] = useState()
    const [erroSenha, setErroSenha] = useState()

    function handleSubmit(event) {
        event.preventDefault()
        let valido = true;
        
        if (!refEmail.current.value) {
            setErroEmail("Email obrigatorio")
            refEmail.current.focus()
            valido = valido && false;
        } else {
            setErroEmail("")
        }

        if (!refSenha.current.value) {
            setErroSenha("Senha obrigatoria")
            valido = valido && false;
        } else if (refSenha.current.value.length < 3) {
            setErroSenha("Senha com no minimo 3 caracteres")
            valido = valido && false;
        } else {
            setErroSenha("")
        }

        if (!valido) {
            return
        }

        props.onSubmit(event)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" ref={refEmail}/>
                {erroEmail && <p>{erroEmail}</p>}
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" name="senha" ref={refSenha}/>
                {erroSenha && <p>{erroSenha}</p>}
            </div>
            <button>Entrar</button>
        </form>
    )
}