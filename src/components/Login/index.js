import {React, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../Login/style.css'


export default function Home() {
  const [cpf, setCpf] = useState('')
  const [senha, setSenha] = useState('')
  const history = useHistory()

  function logar(e) {
    e.preventDefault()
    if (cpf === '12345678900' && senha === '123') {
      history.push('/dashboard')
    } else {
      alert('USUARIO OU SENHA INVALIDOS')
    }
  }

  return (

    <section className="container">

      <form>    
        <div className="fazerLogin">
          <h3>Faça seu login</h3>
        </div>

        <label>CPF
          <input value= { cpf } type="text" onChange={ (e) => setCpf(e.target.value)}></input>
        </label>

        <label>Senha
          <input value={senha} type="password" onChange={ (e) => setSenha(e.target.value)}></input>
        </label>

        <button onClick={logar}>Entrar</button>
        
        <Link className="links" to="/recovey">Esqueci minha senha &gt; </Link>
        <Link className="links" to="/singup">Ainda não sou cliente &gt; </Link>
      </form>
  </section>
  
  )
}