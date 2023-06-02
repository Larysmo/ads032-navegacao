import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

export default function LoginRHF(props) {
    const form = useForm()
    const { register, handleSubmit, formState: { errors } } = form
    const { handleLogin } = useContext(UserContext)
    const navigate = useNavigate()

    const validaEmail = {
        required: {
            value: true,
            message: 'Email é obrigatorio',
        }
    }

    const validaSenha = {
        required: {
            value: true,
            message: 'Senha é obrigatoria',
        },
        minLength: {
            value: 3,
            message: 'Senha deve ter no mínimo 3 caracteres',
        }
    }

    function onSubmit(data) {
        handleLogin()
        navigate("/")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email", validaEmail)} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" {...register("senha", validaSenha)} />
                {errors.senha && <p>{errors.senha.message}</p>}
            </div>
            <button>Entrar</button>
        </form>
    )

}