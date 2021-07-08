import { React, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './style.css'

export default function SingUp() {
  
  const history = useHistory()
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  function singup() {
    history.push('/')
  }

  return (
    <section className="container">

      <form>    
        <div className="criarConta">
          <h3>Crie sua conta</h3>
        </div>

        <label>CPF
          <input value= {cpf} onChange={ (e) => setCpf(e.target.value)} type="text"></input>
        </label>

        <label>Nome Completo
          <input value={nome} onChange={ (e) => setNome(e.target.value)} type="text" ></input>
        </label>

        <label>Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" ></input>
        </label>

        <label>Senha
          <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" ></input>
        </label>

        <label>Confime a senha
          <input value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} type="password" ></input>
        </label>

        <button onClick={singup} >Cadastrar</button>

        <Link className="links" to="/"> &lt; Voltar </Link>
        
      </form>
  </section>
  )
}