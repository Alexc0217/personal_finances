import React from "react";
import "../login/style.scss";
import TextField from "@mui/material/TextField";

function Login(){
  return(
    <>
      <div className="container">
        <header className="header">
          <div className="logo">Personal Finances</div>
        </header>
        <div className="login">
          <h2>Login</h2>
          <div className="form">
            <TextField variant="standard" placeholder="Nome" label="Nome" />
            <TextField variant="standard" placeholder="Email" label="Email" />
            <TextField variant="standard" placeholder="Senha" label="Senha" />
            <TextField variant="standard" placeholder="Confirmar Senha" label="Confirmar Senha" />
            <button type="submit">Criar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;