import {React, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './style.css'


export default function Home() {
  const [cpf, setCpf] = useState('')
  const [senha, setSenha] = useState('')
  const history = useHistory()

  function logar(e) {
    e.preventDefault()
    // mock pra logar
    if (cpf === '01787716430' && senha === '123') {
      history.push('/dashboard')
    } else {
      alert('USUARIO OU SENHA INVALIDOS')
    }
  }

  return (

    <form>
  
      <h1>Faça seu login</h1>

      <label>CPF
        <input value= { cpf } type="text" onChange={ (e) => setCpf(e.target.value)}></input>
      </label>

      <label>Senha
        <input value={senha} type="password" onChange={ (e) => setSenha(e.target.value)}></input>
      </label>

      <button onClick={logar}>Entrar</button>
      
      <Link className="linkDash" to="/singup">
        <h5>Ainda não sou cliente</h5>
      </Link>
    </form>
  )
}