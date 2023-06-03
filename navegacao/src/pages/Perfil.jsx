import { useParams } from "react-router"

export default function Perfil() {
    const {id } = useParams()

    return (
        <>
            <h1>Perfil:  {id}</h1>
        </>
    )
}