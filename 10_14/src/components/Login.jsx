import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {

    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleClick = () => {
        if (password.length >= 6)
            navigate('/produtos')

    }

    return (
        <>
            <h1>LOGIN</h1>
            <label htmlFor="">Usuário: </label>
            <input type="text" /><br />
            <label htmlFor="">Senha: </label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" />
            <br />
            <button onClick={handleClick}>Entrar</button>
        </>
    )
}