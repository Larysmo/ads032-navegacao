// import LoginForm from "./LoginForm";
import LoginRHF from "./LoginRHF";
import '../App.css'


export default function Login(props) {
    return (
        <>
            <h1>Login</h1>
            {/* <LoginForm onSubmit={handleClick} /> */}
            <LoginRHF />
        </>
    )
}