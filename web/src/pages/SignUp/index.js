import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '~/assets/images/logo.svg';

export default function SignUp() {
  return (
    <form>
      <img src={Logo} alt="Logo MeetApp" />
      <input placeholder="Nome Completo" />
      <input placeholder="Digite seu e-mail" />
      <input placeholder="Sua senha secreta" />
      <button type="submit">Criar conta</button>
      <Link to="/">Já tenho login</Link>
    </form>
  );
}
