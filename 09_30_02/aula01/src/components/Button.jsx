import { useState } from 'react'

export default function Button() {
    /*
        //                           Valor padrão
        const [nome, setName] = useState('')

        const handleAlert = () => {
            alert("Clicado!")
        }
        
        const handleChange = (event) => {
            console.log(event.target.value);
            // Utilizando o estado para capturar um valor
            setName(event.target.value)       
        }
    */
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleClick = () => {
        if (senha.length >= 8 && email.length >= 5) {
            alert('Bem vindo!')
        } else {
            alert('Dados de login ou senha inválidos!')
        }
    }

    return (
        <>
            {/*
                <br />
                <input onChange={ handleChange } type="text" />
                <br />
                <br />
                <button onClick={ handleAlert }>Clique</button>
                <br />
                <h2>{ nome }</h2>
                <br />
                <br />            
            */}
            <h2>LOGIN</h2>
            <label htmlFor="">Email: </label>
            <input onChange={(e) => setEmail(e.target.value)} placeholder='Digite o seu email' type="email" /><br />
            <label htmlFor="">Senha: </label>
            <input onChange={({ target: { value } }) => setSenha(value)} placeholder='Digite a sua senha' type="password" /><br /><br />
            <label htmlFor="test">Salvador</label>
            <input id='test' type="checkbox" />
            <br />
            <br />
            <button onClick={ handleClick }>Entrar</button>
        </>
    )
}